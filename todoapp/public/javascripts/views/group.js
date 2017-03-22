var GroupView = Backbone.View.extend({
  tagName: "li",
  className: "group",
  template: App.templates.group,
  render: function() { // deply attach to the DOM
    this.$el.html(this.template(this.model.toJSON()));
    if (this.model.get("completed")) {
      this.$el.addClass("completed");
    }     
    this.$el.appendTo(this.parent);
  },
  initialize: function(options) {
    this.parent = options.parent;
    this.model.view = this;
    this.render();
  }
});