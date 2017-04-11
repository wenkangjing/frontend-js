var ListView = Backbone.View.extend({
  className: "list",
  template: App.templates.list,
  events: {
    "click .open-list-actions": "onOptions",
    "click .open-card-composer": "onAdd",
    "click .list-name-text": "onEdit",
  },
  onEdit: function(e) {
    e.preventDefault();
    var $text = this.$el.find(".list-name-text").hide();
    var $input = this.$el.find(".list-name-input").show();
    var $hiddendiv = this.$el.find(".list-name-input-hiddendiv");

    var oldName = $text.text();
    $input.val(oldName);
    $hiddendiv.text(oldName);
    $input.css('height', $hiddendiv.height());

    $input.on("keyup", function(e) {
      var newName = $input.val().trim();
      $hiddendiv.text(newName);
      $input.css('height', $hiddendiv.height());
      if(newName && (e.which === 13 || e.which === 27)) {
        this.onEditDone(newName);
      }
    }.bind(this));
    $input.on("blur", function(e) {
      var newName = $input.val().trim();
      if(newName) {
        this.onEditDone(newName);
      }
    }.bind(this));
  },
  onEditDone: function(name) {
    var $text = this.$el.find(".list-name-text");
    var $input = this.$el.find(".list-name-input");
    $input.hide();
    $text.show();
    this.model.set("name", name);
    Client.saveList(this.model.toJSON());
  },

  onOptions: function(e) {
    e.preventDefault();
    this.actions = new ListActionsPopover({
      list: this.model,
      pos: Helper.adjustPositionOffset(e, 18)
    });
    this.listenTo(this.actions, "add_card", this.onAdd.bind(this));
    this.listenTo(this.actions, "copy_list", this.onCopyList.bind(this));
    this.listenTo(this.actions, "move_list", this.onMoveList.bind(this));
  },
  onAdd: function(e) {
    e.preventDefault();
    if ($(".card-composer").length > 0) {
      return; // there is a card composer already
    }
    // show composer
    var rawCard = new Card({"idList": this.model.get("id")});
    this.composer = new CardComposerView({model: rawCard});
    this.listenTo(this.composer, "card_composer_on_save", this.addCardConfirm.bind(this));
    this.listenTo(this.composer, "card_composer_on_cancel", this.addCardCancel.bind(this));
    if ($(e.target).hasClass("list-actions-add-card")) {
      this.$el.find(".cards").prepend(this.composer.$el);
    } else {
      this.$el.find(".cards").append(this.composer.$el);
    }
    // hide add button
    this.$el.find(".open-card-composer").hide();
  },
  onCopyList: function(e) {
    new ListCopyPopover({
      model: this.model,
      pos: Helper.adjustPositionOffset(e, 18)
    });
  },
  onMoveList: function(e) {
    new ListMovePopover({
      model: this.model,
      pos: Helper.adjustPositionOffset(e, 18)
    });
  },  
  addCardConfirm: function(json) {
    this.$el.find(".open-card-composer").show();
    Client.saveCard(json, function() {
      Client.getCards();
    });
  },
  addCardCancel: function() {
    this.$el.find(".open-card-composer").show();
  },
  render: function() {
    // clone children before render
    var $elOld = $("#lists").find(".list[data-id=" + this.model.id + "]");
    var $contained_cards = $elOld.find(".card").clone();

    this.$el.html(this.template(this.model.toJSON()));
    this.$el.attr("data-id", this.model.id);
    var $elOld = $("#lists").find(".list[data-id=" + this.model.id + "]");
    if ($contained_cards.length > 0) {
       this.$el.find(".cards").append($contained_cards);
       $elOld.html(this.$el.html());
    } else {
      this.$el.appendTo($("#lists"));
    }
  },
  initialize: function() {
    this.actions = null; // the context menu
    this.render();
    this.listenTo(this.model, "change", this.render.bind(this));
    this.listenTo(App, "render_board", this.remove.bind(this));
  }
});