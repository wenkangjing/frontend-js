var ListView = Backbone.View.extend({
  className: "list",
  template: App.templates.list,
  events: {
    
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.attr("data-id", this.model.id);
    this.$el.appendTo($("#lists"));
  },
  initialize: function(options) {
    this.render();
    this.listenTo(App, "render_board", this.remove.bind(this));
  }
});