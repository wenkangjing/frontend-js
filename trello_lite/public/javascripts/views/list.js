var ListView = Backbone.View.extend({
  className: "list",
  template: App.templates.list,
  events: {
    "click .card": "editCard"
  },
  editCard: function(e) {
    e.preventDefault();
    var id = $(e.target).closest(".card").data("id");
    new CardModalView({model: this.model});
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.attr("data-id", this.model.id);
    this.$el.appendTo($("#lists"));

    var parent = this.$el.find(".cards");
    this.model.get("cards").forEach(function(card) {
      new CardView({
        parent: parent,
        model: new Card(card)
      });
    }.bind(this));
  },
  initialize: function(options) {
    this.render();
  }
});