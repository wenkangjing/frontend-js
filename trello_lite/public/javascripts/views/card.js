var CardView = Backbone.View.extend({
  className: "card",
  template: App.templates.card,
  events: {
    "click": "onClick", // target on this.el
  },
  onClick: function(e) {
    e.preventDefault();
    if ($(e.target).hasClass("card-edit")) {
      App.trigger("card_popover", this.model.get("id"));
    } else {
      App.router.navigate("/cards/" + this.model.get("id"), {trigger: true});
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