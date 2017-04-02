var CardView = Backbone.View.extend({
  className: "card",
  template: App.templates.card,
  events: {
    "click": "onClick", // target on this.el
  },
  onClick: function(e) {
    e.preventDefault();
    if ($(e.target).hasClass("card-edit")) {
      console.log("cardPopover - inline card editor");
    } else {
      new CardModalView({model: this.model});
    }
  },
  render: function() {
    var json = this.model.toJSON();
    json.labels = Helper.getLabelsByIds(this.model.get("idLabels"));
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