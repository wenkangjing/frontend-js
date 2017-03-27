AppRouter = Backbone.Router.extend({
  routes: {
    "": "menu", // root route
    "menu/:id": "detail",
    "checkout": "checkout",
  },
  menu: function() {
    App.renderMenu();
  },
  detail: function(id) {
    App.renderDetail(id);
  },
  checkout: function() {
    App.checkout();
  },
});

