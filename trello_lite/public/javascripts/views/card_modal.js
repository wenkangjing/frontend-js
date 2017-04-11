var CardModalView = Backbone.View.extend({
  template: App.templates.card_modal,
  events: {
    "click .overlay": "onClose",
    // title
    "click .card-modal-title": "onTitle",
    "click .card-modal-list-link": "onList",
    // description
    "click .description .card-modal-edit-description": "editDescription",
    "click .description .card-modal-create-description": "editDescription",
    "click .description .description-close-btn": "closeDescription",
    "submit .description": "saveDescription",
    // comment
    "submit .add-comment-form": "addComment",
    "click .card-modal-edit-comment": "showEditComment",
    "click .card-modal-delete-comment": "deleteComment",
    "submit .edit-comment-form": "updateComment",
    // labels
    "click .labels .card-modal-label": "onLabels",
    "click .labels .card-modal-add-label": "onLabels",
    "click sidebar .card-modal-labels": "onLabels",
    // due date
    "click .card-modal-btn-link.card-modal-due-date": "onDuedate",
    // subscribe
    "click .card-modal-btn-link.card-modal-subscribe": "toggleSubscribe",
    // completed
    "click .due-date-complete-check": "toggleComplete",
    // move 
    "click .card-modal-btn-link.card-modal-move": "onMove",
    // copy
   "click .card-modal-btn-link.card-modal-copy": "onCopy",
    // archive
    "click .card-modal-btn-link.card-modal-archive": "onArchive",
  },
  onClose: function(e) {
    var $e = $(e.target);
    if ($e.hasClass("overlay") || $e.hasClass("dialog-close-btn")) {
      e.preventDefault();
      this.uninitialize();
      App.goto("/");
    }
  },
  onArchive: function(e) {
    Client.saveCard(this.model.get("id"));
    App.cards.remove(this.model);
    this.uninitialize();
    App.goto("/");
  },  
  editDescription: function(e) {
    e.preventDefault();
    this.$desc.prev().hide();
    this.$desc.show();
  },
  saveDescription: function(e) {
    e.preventDefault();
    var description = this.$desc.serializeArray()[0].value;
    if (description) {
      this.model.set("description", description);
      Client.saveCard(this.model.toJSON());
      this.$desc.prev().show();
      this.$desc.hide();
    }
  },
  closeDescription: function(e) {
    e.preventDefault();
    this.$desc.get(0).reset();
    this.$desc.prev().show();
    this.$desc.hide();
  },
  addComment: function(e) {
    e.preventDefault();
    var $f = this.$el.find(".add-comment-form");
    var comment = $f.serializeArray()[0].value;
    if (comment) {
      Client.saveComment({
        comment: comment,
        idCard: this.model.get("id")
      });
    }
  },
  showEditComment: function(e) {
    e.preventDefault();
    var $li = $(e.target).closest("li");
    var txt = $li.find(".comment").hide().text();
    $li.html(this.$el.find("#comment-edit-form").html());
    $li.find("form textarea").val(txt);
  },
  updateComment: function(e) {
    e.preventDefault();
    var idComment = $(e.target).closest("li").data("id");
    var $f = this.$el.find(".edit-comment-form");
    var comment = $f.serializeArray()[0].value;
    if (comment) {
      Client.saveComment({
        id: idComment,
        comment: comment,
        idCard: this.model.get("id")
      });
    }
  },
  deleteComment: function(e) {
    e.preventDefault();
    var idComment = $(e.target).closest("li").data("id");
    Client.deleteActivity(idComment);
  },
  toggleSubscribe: function(e) {
    e.preventDefault();
    var status = !this.model.get("subscribed");
    this.model.set("subscribed", status);
    Client.saveCard(this.model.toJSON());
  },
  toggleComplete: function(e) {
    e.preventDefault();
    var status = !this.model.get("completed");
    this.model.set("completed", status);
    Client.saveCard(this.model.toJSON());
  },
  onLabels: function(e) {
    e.preventDefault();
    new LabelsPopover({
      card: this.model,
      pos: Helper.adjustPositionOffset(e, 37)
    });
  },
  onDuedate: function(e) {
    e.preventDefault();
    new DueDatePopover({
      card: this.model,
      pos: Helper.adjustPositionOffset(e, 37)
    });
  },
  onMove: function(e) {
    e.preventDefault();
    this.movePopover = new CardMovePopover({
      card: this.model,
      pos: Helper.adjustPositionOffset(e, 37)
    });
  },
  onCopy: function(e) {
    e.preventDefault();
    this.copyPopover = new CardCopyPopover({
      card: this.model,
      pos: Helper.adjustPositionOffset(e, 37)
    });
  }, 
  onTitle: function(e) {
    e.preventDefault();
    var $text = this.$el.find(".card-modal-title").hide();
    var $input = this.$el.find(".card-modal-title-input").show();
    var $hiddendiv = this.$el.find(".card-modal-title-input-hiddendiv");

    var oldName = $text.text();
    $input.val(oldName);
    $hiddendiv.text(oldName);
    $input.css('height', $hiddendiv.height());

    $input.on("keyup", function(e) {
      var newName = $input.val().trim();
      $hiddendiv.text(newName);
      $input.css('height', $hiddendiv.height());
      if(newName && (e.which === 13 || e.which === 27)) {
        this.onTitleDone(newName);
      }
    }.bind(this));
    $input.on("blur", function(e) {
      var newName = $input.val().trim();
      if(newName) {
        this.onTitleDone(newName);
      }
    }.bind(this));
  },
  onTitleDone: function(name) {
    var $text = this.$el.find(".card-modal-title");
    var $input = this.$el.find(".card-modal-title-input");
    $input.hide();
    $text.show();
    this.model.set("name", name);
    Client.saveCard(this.model.toJSON());
  },
  onList: function(e) {
    e.preventDefault();
    var list = App.lists.get(this.model.get("idList"));
    if (list) {
      new ListMovePopover({
        model: list,
        pos: Helper.adjustPositionOffset(e, 18)
      });
    }
  },
  render: function() {
    // retrieve data
    var json = this.model.toJSON();
    json.activities = [];
    json.labels =  Helper.getLabelObjects(this.model.get("idLabels"));
    json.list = this.model.getListName();
    var activities = Helper.getActivitiesByCard(this.model.get("id"));
    if (activities.length > 0) {
      json.activities = json.activities.concat(activities);
    }
    // build html
    this.$el.html(this.template(json));
    this.$el.find(".card-modal").attr("data-id", this.model.id);
    this.$el.appendTo(App.$el);
    this.$desc = this.$el.find(".description form");
    this.delegateEvents();
  },
  uninitialize: function() {
    this.remove();
    App.modal = null;
    App.trigger("clear_popover");
  },  
  initialize: function(options) {
    this.render();
    this.listenTo(this.model, "change remove", this.render.bind(this));
    this.listenTo(App.activities, "change update", this.render.bind(this));
    this.listenTo(App.labels, "change update", this.render.bind(this));
    this.listenTo(App, "render_board", this.remove.bind(this));
  }
});