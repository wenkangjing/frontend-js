var GroupsView = Backbone.View.extend({
  tagName: "section",
  template: App.templates.groups,
  render: function() { // deply attach to the DOM
    this.$el.html(this.template({
      title: this.collection.getTitle(),
      total: this.collection.getTotal(),
      groups: this.collection.toJSON(),
    }));
    this.$el.addClass(this.collection.className);
    this.$el.appendTo(App.$el.find("#sidebar"));
  },
  initialize: function(options) {
    this.render();
    this.listenTo(this.collection, "change update", this.render);
  }
});