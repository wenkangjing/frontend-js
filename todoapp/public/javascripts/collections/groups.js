var Groups = Backbone.Collection.extend({
  model: Group,
  getTitle: function() {
    return this.title;
  },
  getTotal: function() {
    return this.models.reduce(function(sum, group) {
      return sum + group.get("count");
    }, 0)
  },
  getClassName: function() {
    return this.className;
  },
  initialize: function(models, options) {
    options = options || {};
    this.title = options.title;
    this.className = options.className;
  }
})