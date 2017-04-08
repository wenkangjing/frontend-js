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
    $input.css('height', $hiddendiv.outerHeight());

    $input.on("keyup", function(e) {
      var newName = $input.val().trim();
      $hiddendiv.text(newName);
      $input.css('height', $hiddendiv.outerHeight());
      if(newName && (e.which === 13 || e.which === 27)) {
        this.onEditDone(newName);
      }
    }.bind(this));
    $input.on("blur", function(e) {
      var newName = $input.text().trim();
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
    App.trigger("client_save_list", this.model.toJSON());
  },

  onOptions: function(e) {
    e.preventDefault();
    new ListActionsPopover({
      list: this.model,
      pos: Helper.adjustPosition(e, 18)
    });
    this.listenTo(this.listActions, "add_card", this.onAdd.bind(this));
  },
  onAdd: function(e) {
    e.preventDefault();
    // show composer
    var rawCard = new Card({"idList": this.model.get("id")});
    this.composer = new CardComposerView({model: rawCard});
    this.listenTo(this.composer, "card_composer_on_save", this.onSave.bind(this));
    this.listenTo(this.composer, "card_composer_on_cancel", this.onCancel.bind(this));
    this.$el.find(".cards").append(this.composer.$el);

    // hide add button
    this.$add = $(e.target);
    this.$add.hide();
  },
  onSave: function(json) {
    this.$add.show();
    App.trigger("client_save_card", json);
  },
  onCancel: function() {
    this.$add.show();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.attr("data-id", this.model.id);
    $("#lists").find(".list[data-id=" + this.model.id + "]").remove();
    this.$el.appendTo($("#lists"));
  },
  initialize: function() {
    this.render();
    this.listenTo(App, "render_board", this.remove.bind(this));
  }
});