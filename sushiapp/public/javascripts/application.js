var App = {
  $el: $("#application"),
  templates: JST,
  createRouter: function() {
    this.router  = new AppRouter();
    Backbone.history.start({
      pushState: true
    });
  },
  renderMenu: function() {
    App.cart_visibility = true;
    new MenuView({collection: this.menu_items});
    this.router.navigate("/", {trigger: true});
  },
  renderDetail: function(id) {
    App.cart_visibility = true;
    if (id >= 1  && id <= this.menu_items.length) {
      var model = App.menu_items.get(id);
      new MenuDetailView({model: model});
      this.router.navigate("/menu/" + id, {trigger: true});
    }
  },
  renderCheckout: function() {
    App.cart_visibility = false;
    App.cart_items.trigger("update");
    new CheckoutView({collection: this.cart_items});
    this.router.navigate("/checkout", {trigger: true});
  },
  addToCart: function(id) {
    var model = this.menu_items.findWhere({id: id});
    this.cart_items.addItem(model);
  },
  deleteFromCart: function(id) {
    this.cart_items.deleteItem(id);
  },
  emptyCart: function() {
    this.cart_items.empty();
  },
  bindEvents: function() {
    this.off().on({
      "detail": this.renderDetail.bind(this),
      "menu": this.renderMenu.bind(this),
      "checkout": this.renderCheckout.bind(this),
      "add_to_cart": this.addToCart.bind(this),
      "delete_from_cart": this.deleteFromCart.bind(this),
      "empty_cart": this.emptyCart.bind(this),
    });
    $(document).on("click", "a[href^='/']", this.goto.bind(this));
    $(document).on("click", ".menu-item .mask[href^='/']", this.goto.bind(this));
  },
  goto: function(e) {
    e.preventDefault();
    var fregment = $(e.currentTarget).attr("href").replace(/^\//, "");
    this.router.navigate(fregment, {trigger: true});
  },
  buildTemplates: function() {
    Handlebars.registerHelper('toFixed', function(amount, options) {
      amount = Number(amount);
      return amount.toFixed(2);
    });
    Handlebars.registerHelper('toKcar', function(amount, options) {
      amount = Number(amount);
      return (amount * 0.239).toFixed(4);
    });
  },
  init: function() {
    _.extend(this, Backbone.Events);
    this.bindEvents();
    this.buildTemplates();
    this.createRouter();
    new CartDetailView({collection: this.cart_items});
  }
}