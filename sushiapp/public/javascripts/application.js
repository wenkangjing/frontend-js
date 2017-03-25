var App = {
  templates: JST,
  renderMenu: function() {
    this.menu = new MenuView({collection: App.menu});
  },
  init: function() {
    this.renderMenu();
  }
}