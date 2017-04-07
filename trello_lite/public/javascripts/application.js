var App = {
  $el: $("#application"),
  templates: JST,
  //
  // router
  ////////////////////////////////
  createRouter: function() {
    this.router  = new AppRouter();
    Backbone.history.start({
      pushState: true
    });
  },
  goto: function(fregment, trigger) {
    trigger = trigger || false;
    this.router.navigate(fregment, {trigger: trigger});
  },

  //
  // render
  ////////////////////////////////////
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
    new CardModalView({
      model: this.cards.findWhere({id: id})
    });
  },
  renderCardEditor: function(id, pos) {
    new CardEditorView({
      pos: pos,
      model: this.cards.findWhere({id: id})
    });
  },

  // 
  // init
  /////////////////////////////////////////////
  buildEvents: function() {
    this.off().on({
      // Client request
      "save_card": Client.saveCard.bind(Client),
      "delete_card": Client.deleteCard.bind(Client),
      "save_label": Client.saveLabel.bind(Client),
      "delete_label": Client.deleteLabel.bind(Client),
      "save_comment": Client.saveComment.bind(Client),
      "save_action": Client.saveAction.bind(Client),
      "delete_activity": Client.deleteActivity.bind(Client),
    });
  },
  init: function() {
    _.extend(this, Backbone.Events);
    Helper.buildTemplates();
    this.buildEvents();
    this.createRouter();
  }
};


