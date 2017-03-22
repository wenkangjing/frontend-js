var IndexView = Backbone.View.extend({
  template: App.templates.index,
  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.toJSON()));
    } else {
      this.$el.html(this.template());
    }
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
    this.listenTo(App, "update", this.render.bind(this));
  }
});