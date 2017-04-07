var Lists = Backbone.Collection.extend({
  model: List,
  comparator: 'created'
});