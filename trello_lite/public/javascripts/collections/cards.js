var Cards = Backbone.Collection.extend({
  model: Card,
  comparator: 'created'
});