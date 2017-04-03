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
      App.router.navigate("/cards/" + id);
    }
  },
  render: function() {
    var json = this.model.toJSON();
    json.labels = Helper.getLabelObjects(this.model.get("idLabels"));
    this.$el.html(this.template(json));
    this.$el.attr("data-id", this.model.id);
    this.$el.appendTo(this.parent);
  },
  initialize: function(options) {
    this.parent = options.parent;
    this.render();
    this.listenTo(this.model, "change:idLabels", this.render.bind(this));
  }
});