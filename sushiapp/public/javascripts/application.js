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
    if (!this.cartDetail) {
      this.cartDetail = new CartDetailView({collection: this.cart_items});
    }    
    if (this.view) {
      this.view.remove();
    }
    this.view = new MenuView({collection: this.menu_items});
    this.router.navigate("/", {trigger: true});
  },
  renderDetail: function(id) {
    if (!this.cartDetail) {
      this.cartDetail = new CartDetailView({collection: this.cart_items});
    }    
    if (id >= 1  && id <= this.menu_items.length) {
      var model = App.menu_items.get(id);
      if (this.view) {
        this.view.remove();
      }
      this.view = new MenuDetailView({model: model});
      this.router.navigate("/menu/" + id, {trigger: true});
    }
  },
  renderCheckout: function() {
    if (this.cartDetail) {
      this.cartDetail.$el.hide();
    }
    if (this.view) {
      this.view.remove();
    }
    this.view = new CheckoutView({collection: this.cart_items});
    this.router.navigate("/checkout", {trigger: true});
  },
  addToCart: function(id) {
    if (!this.cartDetail) {
      this.cartDetail = new CartDetailView({collection: this.cart_items});
    }
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
      "add_to_cart": this.addToCart.bind(this),
      "delete_from_cart": this.deleteFromCart.bind(this),
      "empty_cart": this.emptyCart.bind(this),
      "checkout": this.renderCheckout.bind(this)
    });
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
    this.cartInfo = new CartInfoView();
  }
}