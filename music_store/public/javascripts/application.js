var App = {
  $el: $("main"),
  templates: JST, // handlebars
  indexView: function() {
    this.index = new IndexView();
    this.renderAlbums();
    this.createCart();
    this.bindEvents();
  },
  renderAlbums: function() {
    this.albums.each(this.renderAlbumView.bind(this));
  },
  renderAlbumView: function(album) {
    new AlbumView({model: album});
  },
  newAlbum: function() {
    new NewAlbumView();
  },
  editAlbum: function(model) {
    new NewAlbumView({model: model});
  },
  createCart: function() {
    this.cart = new CartItems();
    this.cart.view = new CartView({
      collection: this.cart
    });
  },
  checkout: function() {
    if (!this.cart) {
      this.createCart();
    }
    new CheckoutView({
      collection: this.cart
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on("add_to_cart", this.cart.addItem.bind(this.cart));
    this.on("remove_from_cart", this.cart.removeItem.bind(this.cart));
    this.on("edit_album", this.editAlbum.bind(this));
    this.on("new_album", this.newAlbum.bind(this));
    //this.listenTo(this.index, "new_album", this.newAlbum);
  },
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});