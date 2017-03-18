var CartItems = Backbone.Collection.extend({
  addItem: function(item) {
    var existing = this.get(item.get("id"));
    if (existing) {
      existing.set("quantity", existing.get("quantity") + 1);
    } else {
      existing = item.clone();
      existing.set("quantity", 1);
      this.add(existing);
    }
    this.setTotal().setQuantity();
    this.trigger("cart_updated");
    this.saveCart();
  },
  removeItem: function(id) {
    var existing = this.get(id);
    if (existing) {
      this.remove(existing);
      this.setTotal().setQuantity();
      this.trigger("cart_updated");
      this.saveCart();
    }
  },
  getTotal: function() {
    return this.total;
  },
  setTotal: function() {
    this.total = this.toJSON().reduce(function(sum, item) {
      return sum + Number(item.price) * Number(item.quantity);
    }, 0);
    return this;
  },
  getQuantity: function() {
    return this.quantity;
  },
  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(sum, item) {
      return sum + Number(item.quantity);
    }, 0);
    return this;
  },
  saveCart: function() {
    localStorage.setItem("cart", JSON.stringify(this.toJSON()));
  },
  loadCart: function() {
    var json = localStorage.getItem("cart");
    if (json) {
      this.reset(JSON.parse(json));
      this.setTotal().setQuantity();
      this.trigger("cart_updated");
    }
  },
  initialize: function() {
    this.loadCart();
  }
});