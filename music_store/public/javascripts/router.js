var router = new (Backbone.Router.extend({
  routes: {
    "": "index", // root route
    "albums/new": "new",
    "albums/edit/:id": "edit",
    "checkout": "checkout",
  },
  new: function() { 
    App.newAlbum();
  },
  index: function() {
    App.indexView();
  },
  edit: function(id) {
    var model = App.albums.get(+id)
    App.editAlbum(model);
  },
  checkout: function() {
    App.checkout();
  },
}))();

// history is a singleton instance
Backbone.history.start({
  pushState: true
});

App.goto = function(fregment) {
  router.navigate(fregment, {trigger: true});
};

// get ride of '/', backbone assumming / will be there
// $(document).on("click", "a[href^='/']", function(e) {
//   e.preventDefault();
//   var fregment = $(e.currentTarget).attr("href").replace(/^\//, "");
//   router.navigate(fregment, {trigger: true});
// });
