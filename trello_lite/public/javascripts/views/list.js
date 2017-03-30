var ListView = Backbone.View.extend({
  className: "list",
  template: App.templates.list,
  render: function() {
    this.$el.html(this.template({
      name: this.name,
      subscribed: this.subscribed,
      cards: this.collection.toJSON()
    }));
    this.$el.attr("id", this.id);
    this.$el.appendTo($("#lists"));
    this.collection.each(function(card) {
      console.log(card);
      new CardView({
        parent: this.$el.find(".cards"),
        model: card
      });
    }.bind(this));
  },
  initialize: function(options) {
    this.id = options.id;
    this.name = options.name;
    this.subscribed = options.subscribed;
    this.render();
  }
});