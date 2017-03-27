var App = {
  $el: $("#application"),
  templates: JST,
  createView: function() {
    if (!this.menuView) {
      this.menuView = new MenuView({collection: this.menu_items});
    } 
    if (!this.detailView) {
      this.detailView = new MenuDetailView();
    }
    if (!this.cartInfo) {
      this.cart_items = new Cart();
      this.cartInfo = new CartInfoView({count: 7});
    }
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
  renderCartInfo: function() {
    this.cartInfo.render();
  },
  addToCart: function(id) {
    var model = this.menu_items.findWhere({id: id});
    this.cart_items.addItem(model);
  },
  removeFromCart: function(id) {
    this.cart_items.removeItem(id);
  },
  bindEvents: function() {
    // close detail view when click outside element
    //this.$el.on("click", this.removeDetail.bind(this));
    this.off()
      .on("detail", this.renderDetail.bind(this))
      .on("menu", this.renderMenu.bind(this))
      .on("add_to_cart", this.addToCart.bind(this));
  },
  init: function() {
    _.extend(this, Backbone.Events);
    this.createView();
    this.bindEvents();
    this.renderMenu();
    this.renderCartInfo();
    this.createRouter();
  }
}