var App = {
  $el: $("#application"),
  templates: JST,
  renderBoard: function() {
    this.board.forEach(function(list) {
      this.renderList(list);
    }.bind(this));
  },
  renderList: function(list) {
    new ListView({raw: list});
  },
  init: function() {
    this.renderBoard();
  }
};