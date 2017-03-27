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




// get ride of '/', backbone assumming / will be there
// $(document).on("click", "a[href^='/']", function(e) {
//   e.preventDefault();
//   var fregment = $(e.currentTarget).attr("href").replace(/^\//, "");
//   router.navigate(fregment, {trigger: true});
// });
