var App = {
  $el: $("#application"),
  templates: JST,
  renderBoard: function() {
    this.board.forEach(function(list) {
      this.renderList(list);
    }.bind(this));
  },
  renderList: function(list) {
    new ListView({
      id: list.id,
      name: list.name,
      subscribed: list.subscribed,
      collection: new List(list.cards)
    });
  },
  init: function() {
    this.renderBoard();
  }
};