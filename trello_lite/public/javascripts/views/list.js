var ListView = Backbone.View.extend({
  className: "list",
  tagName: "div",
  template: App.templates.list,
  render: function() {
    this.$el.html(this.template(this.raw));
    this.$el.appendTo($("#lists"));
    this.raw.cards.forEach(function(card) {
      console.log("...to render", card);
      new CardView({
        parent: this.$el,
        model: new Card(card)
      });
    }.bind(this));
  },
  initialize: function(options) {
    Object.assign(this, options);
    this.render();
  }
});