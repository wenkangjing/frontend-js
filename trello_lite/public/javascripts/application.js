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
    this.renderLists();
    this.renderCards();
    dragula([document.getElementById("lists")], {
      moves: function(el, container, handle) {
        return $(handle).closest(".card").length === 0;
      }
    });
  },
  renderLists: function() {
    this.lists.forEach(function(list) {
      new ListView({model: list});
    }.bind(this));
    var array = [];
    App.$el.find(".cards").each(function(idx, el) {
      array.push(el);
    });
    dragula(array);
  },
  renderCards: function() {
    this.cards.forEach(function(card) {
      new CardView({model: card});
    }.bind(this));
  },
  renderCardModal: function(id) {
    new CardModalView({
      model: this.cards.findWhere({id: id})
    });
  },
  renderCardEditor: function(id, triggerPos) {
    new CardEditorView({
      pos: triggerPos,
      model: this.cards.findWhere({id: id})
    });
  },
  // 
  // init
  /////////////////////////////////////////////
  buildEvents: function() {
    this.off().on({
      "client_get_cards": Client.getCards.bind(Client),
      "client_save_card": Client.saveCard.bind(Client),
      "client_delete_card": Client.deleteCard.bind(Client),
      
      "client_get_labels": Client.getLabels.bind(Client),
      "client_save_label": Client.saveLabel.bind(Client),
      "client_delete_label": Client.deleteLabel.bind(Client),
      
      "client_save_comment": Client.saveComment.bind(Client),
      "client_save_action": Client.saveAction.bind(Client),
      "client_delete_activity": Client.deleteActivity.bind(Client),

      "client_get_lists": Client.getLists.bind(Client),
      "client_save_list": Client.saveList.bind(Client),
      "client_delete_list": Client.deleteList.bind(Client),
    });
    this.listenTo(this.cards, "update", this.renderCards.bind(this));
    this.listenTo(this.lists, "update", this.renderBoard.bind(this));
  },
  init: function() {
    _.extend(this, Backbone.Events);
    Helper.registerHelpers();
    this.buildEvents();
    this.createRouter();
  }
};


