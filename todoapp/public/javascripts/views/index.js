var IndexView = Backbone.View.extend({
  template: App.templates.index,
  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.toJSON()));
    } else {
      this.$el.html(this.template());
    }
    // this.$el.find("#sidebar .all .badge").text("10");
    // this.$el.find("#sidebar .completed .badge").text("10");
    // this.$el.find("#content .badge").text("10");
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
    this.listenTo(App, "update", this.render.bind(this));
  }
});