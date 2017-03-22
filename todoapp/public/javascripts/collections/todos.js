var Todos = Backbone.Collection.extend({
  model: Todo,
  toggleComplete: function(id) {
    var t = this.get(id);
    t.set("completed", !t.get("completed"));
  },
  initialize: function(models, options) {
    options = options || {};
    this.title = options.title;
    this.total = options.total;
  }
})