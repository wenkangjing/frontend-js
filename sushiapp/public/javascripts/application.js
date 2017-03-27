var App = {
  $el: $("#application"),
  templates: JST,
  createView: function() {
    if (!this.menuView) {
      this.menuView = new MenuView({collection: App.menu_items});
    } 
    if (!this.detailView) {
      this.detailView = new MenuDetailView();
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
    this.menuView.hide();
    var model = App.menu_items.get(id);
    this.detailView.model = model;
    this.detailView.render();
    this.router.navigate("/menu/" + id, {trigger: true});
  },
  bindEvents: function() {
    // close detail view when click outside element
    //this.$el.on("click", this.removeDetail.bind(this));
    this.off()
      .on("detail", this.renderDetail.bind(this));
  },
  init: function() {
    _.extend(this, Backbone.Events);
    this.createView();
    this.bindEvents();
    this.renderMenu();
    this.createRouter();
  }
}