var CardModalView = Backbone.View.extend({
  template: App.templates.card_modal,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.find(".card-modal").attr("data-id", this.model.id);
    this.$el.appendTo(App.$el);
  },
  initialize: function(options) {
    this.render();
  }
});