AppRouter = Backbone.Router.extend({
  routes: {
    "": "board",
    "cards/:id": "cardModal",
  },
  board: function() {
    App.renderBoard();
  },
  cardModal: function(id) {
    App.renderBoard();
    App.renderCardModal(id);
  },
});

