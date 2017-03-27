var Cart = Backbone.Collection.extend({
  // will  clone the model
  addItem: function(model){
    var found = this.findWhere({id: model.id});
    if (found) {
      found.set("quantity", found.get("quantity") + 1);
    } else {
      found = model.clone();
      found.set("quantity", 1);
      this.push(found);
    }
  },
  removeItem: function(id) {
    var model = this.findWhere({id: id});
    if (model.quantity > 1) {
      model.quantity--;
    } else {
      model.remove();
    }
  },
  empty: function() {
    this.reset();
  },
  getTotal: function() {
    return this.toJSON().reduce(function(total, item) {
      return total + Number(item.quantity) * Number(item.price);
    }, 0)
  },
});