var App = {
  $el: $("#application"),
  templates: JST,
  renderMenu: function() {
    if (!this.menuView) {
      this.menuView = new MenuView({collection: App.menu_items});
    }
    this.menuView.$el.show();
  },
  renderDetail: function(id) {
    if (this.detailView) { 
      this.detailView.remove(); 
    }
    this.menuView.$el.hide();
    var model = App.menu_items.get(id);
    this.detailView = new MenuDetailView({
      model: model,
      parent: this.$el.find("#wrapper")
    });
  },
  removeDetail: function(e) {
  },
  bindEvents: function() {
    // close detail view when click outside element
    //this.$el.on("click", this.removeDetail.bind(this));
    this.off()
      .on("detail", this.renderDetail.bind(this));
  },
  init: function() {
    _.extend(this, Backbone.Events);
    this.bindEvents();
    this.renderMenu();
  }
}