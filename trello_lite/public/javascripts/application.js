var App = {
  $el: $("#application"),
  templates: JST,
  createRouter: function() {
    this.router  = new AppRouter();
    Backbone.history.start({
      pushState: true
    });
  },  
  renderBoard: function() {
    App.trigger("render_board");
    this.lists.forEach(function(list) {
      new ListView({model: list});
    }.bind(this));
    this.cards.forEach(function(card) {
      new CardView({model: card});
    }.bind(this));
  },
  renderCardModal: function(id) {
    new CardModalView({model: this.cards.findWhere({id: id})});
  },
  renderCardPopover: function(model) {
    console.log("cardPopover - inline card editor");
  },
  goto: function(fregment, trigger) {
    trigger = trigger || false;
    this.router.navigate(fregment, {trigger: trigger});
  },
  buildEvents: function() {
    this.off().on({
      "card_popover": this.renderCardPopover.bind(this),
      "save_card": Client.saveCard.bind(Client),
      "delete_card": Client.deleteCard.bind(Client)
    });
  },
  init: function() {
    _.extend(this, Backbone.Events);
    Helper.buildTemplates();
    this.buildEvents();
    this.createRouter();
  }
};


