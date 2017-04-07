var ListView = Backbone.View.extend({
  className: "list",
  template: App.templates.list,
  events: {
    "click .open-card-composer": "onAdd"
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
    console.log("cancel")
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