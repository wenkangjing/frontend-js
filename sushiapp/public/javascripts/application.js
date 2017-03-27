var App = {
  $el: $("#application"),
  templates: JST,
  createViews: function() {
    this.menuView = new MenuView({collection: this.menu_items});
    this.detailView = new MenuDetailView();
    this.cartInfoView = new CartInfoView({count: 7});
    this.cartDetailView = new CartDetailView({collection: this.cart_items});
    this.checkoutView = new CheckoutView({collection: this.cart_items});
  },
  createRouter: function() {
    this.router  = new AppRouter();
    Backbone.history.start({
      pushState: true
    });
  },
  renderMenu: function() {
    this.detailView.hide();
    this.menuView.render();
    this.router.navigate("/", {trigger: true});
  },
  renderDetail: function(id) {
    if (id >= 1  && id <= this.menu_items.length) {
      this.menuView.hide();
      var model = App.menu_items.get(id);
      this.detailView.model = model;
      this.detailView.render();
      this.router.navigate("/menu/" + id, {trigger: true});
    } else {
      this.router.navigate("/", {trigger: true});
    }
  },
  renderCheckout: function() {
    this.menuView.hide();
    this.detailView.hide();
    this.cartDetailView.hide();
    this.checkoutView.render();
    this.router.navigate("/checkout", {trigger: true});
  },
  addToCart: function(id) {
    var model = this.menu_items.findWhere({id: id});

    this.cart_items.addItem(model);
  },
  removeFromCart: function(id) {
    this.cart_items.removeItem(id);
  },
  emptyCart: function() {
    this.cart_items.empty();
  },
  bindEvents: function() {
    this.off()
      .on("detail", this.renderDetail.bind(this))
      .on("menu", this.renderMenu.bind(this))
      .on("add_to_cart", this.addToCart.bind(this))
      .on("remove_from_cart", this.removeFromCart.bind(this))
      .on("empty_cart", this.emptyCart.bind(this))
      .on("checkout", this.renderCheckout.bind(this));
  },
  init: function() {
    _.extend(this, Backbone.Events);
    this.createViews();
    this.bindEvents();
    this.createRouter();
    this.renderMenu();
  }
}