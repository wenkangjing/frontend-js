var ListView = Backbone.View.extend({
  className: "list",
  template: App.templates.list,
  events: {
    
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.attr("data-id", this.model.id);
    this.$el.appendTo($("#lists"));

    var parent = this.$el.find(".cards");
    Helper.getCardModels(this.model.get("idCards")).forEach(function(card) {
      new CardView({
        parent: parent,
        model: card
      });
    }.bind(this));
  },
  initialize: function(options) {
    this.render();
  }
});