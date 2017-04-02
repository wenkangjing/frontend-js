var List = Backbone.Model.extend({
  initialize: function() {
    var cards = [];
    var idCards = this.get("idCards") || [];
    idCards.forEach(function(id) {
      var card = _(App.cards).findWhere({id: id});
      cards.push(card);
    });
    this.set("cards", cards);
  }
});