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
    this.saveCart();
  },
  deleteItem: function(id) {
    var model = this.findWhere({id: id});
    var quantity = model.get("quantity");
    if (quantity > 1) {
      model.set("quantity", quantity - 1);
    } else {
      this.remove(model);
    }
    this.saveCart();
  },
  empty: function() {
    this.reset();
    this.saveCart();
  },
  getTotal: function() {
    return this.toJSON().reduce(function(total, item) {
      return total + Number(item.quantity) * Number(item.price);
    }, 0)
  },
  saveCart: function() {
    localStorage.setItem("cart", JSON.stringify(this.toJSON()));
  },
  loadCart: function() {
    var json = localStorage.getItem("cart");
    if (json) {
      this.reset(JSON.parse(json));
      this.trigger("update");
    }
  },
  initialize: function() {
    this.loadCart();
  }
});