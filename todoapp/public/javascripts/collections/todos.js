var Todos = Backbone.Collection.extend({
  model: Todo,
  initialize: function(models, options) {
    options = options || {};
    this.title = options.title;
    this.total = options.total;
  }
})