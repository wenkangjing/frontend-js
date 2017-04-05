var CardView = Backbone.View.extend({
  className: "card",
  template: App.templates.card,
  events: {
    "click": "onClick", // target on this.el
  },
  onClick: function(e) {
    e.preventDefault();
    var id =  this.model.get("id");
    if ($(e.target).hasClass("card-edit")) {
      App.trigger("card_popover", id);
    } else {
      App.renderCardModal(id);
      App.goto("/cards/" + id);
    }
  },
  render: function() {
    var json = this.model.toJSON();
    json.labels = Helper.getLabelObjects(this.model.get("idLabels"));
    json.comments = Helper.getCommentsByCard(this.model.get("id")).length;
    var idList = this.model.get("idList");
    var parent = App.$el.find(".list[data-id=" + idList + "] .cards");
    this.$el.html(this.template(json));
    this.$el.attr("data-id", this.model.id);
    this.$el.appendTo(parent);
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, "change", this.render.bind(this));
    this.listenTo(this.model, "remove", this.remove.bind(this));
    this.listenTo(App.comments, "change update", this.render.bind(this));
  }
});