var ListView = Backbone.View.extend({
  className: "list",
  template: App.templates.list,
  events: {
    "click .card": "editCard"
  },
  editCard: function(e) {
    e.preventDefault();
    var id = $(e.target).closest(".card").data("id");
    new CardModalView({model: this.collection.get(id)});
  },
  render: function() {
    this.$el.html(this.template({
      name: this.name,
      subscribed: this.subscribed,
      cards: this.collection.toJSON()
    }));
    this.$el.attr("data-id", this.idList);
    this.$el.appendTo($("#lists"));
    this.collection.each(function(card) {
      new CardView({
        parent: this.$el.find(".cards"),
        model: card
      });
    }.bind(this));
  },
  initialize: function(options) {
    this.idList = options.idList,
    this.name = options.name;
    this.subscribed = options.subscribed;
    this.render();
  }
});