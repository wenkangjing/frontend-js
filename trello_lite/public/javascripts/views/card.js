var CardView = Backbone.View.extend({
  className: "card",
  template: App.templates.card,
  events: {
    
  },
  bindEvents: function() {
    this.$el.on("click", ".card", this.editCard.bind(this));
  },
  editCard: function(e) {
    e.preventDefault();
    new CardModalView({model: this.model});
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.attr("data-id", this.model.id);
    this.$el.appendTo(this.parent);
  },

  initialize: function(options) {
    this.parent = options.parent;
   // this.bindEvents();
    this.render();
  }
});