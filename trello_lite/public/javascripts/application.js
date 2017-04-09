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
    }).on('drag', function (el, source) {
      var $el = $(el);
      $el.addClass("dragging");
    }).on('drop', function (el, target, source, sibling) {
      $(el).removeClass("dragging list-placeholder");
    }).on('cancel', function (el, container, source) {
      $(el).removeClass("dragging list-placeholder");
    }).on("shadow", function(el, container, source) {
      $(el).addClass('list-placeholder');
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
    dragula(array).on('drag', function (el, source) {
      $(el).addClass("dragging");
    }).on('drop', function (el, target, source, sibling) {
      var $el = $(el);
      $el.removeClass("dragging card-placeholder");
      var idCard = $el.data("id");
      var idList = $(target).closest(".list").data("id");
      var card = App.cards.findWhere({id: idCard});
      if (card.get("idList") !== idList) {
        App.trigger("client_move_card", idCard, idList);
      }
    }).on('cancel', function (el, container, source) {
      $(el).removeClass("dragging");
    }).on("shadow", function(el, container, source) {
      $(el).addClass('card-placeholder');
    });
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
  // move
  /////////////////////////////////////////////
  moveCard: function(idCard, idList) {
    var card = App.cards.get(idCard);
    card.set("idList", idList, {silent: true});
    Client.saveCard(card.toJSON());
  },
  // 
  // init
  /////////////////////////////////////////////
  buildEvents: function() {
    this.off().on({
      "client_get_cards": Client.getCards.bind(Client),
      "client_save_card": Client.saveCard.bind(Client),
      "client_delete_card": Client.deleteCard.bind(Client),
      "client_move_card": this.moveCard.bind(this),

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


$(window).on("beforeunload", sync);

function sync() {
  var lists = [];
  $("#lists .list").each(function(idx, el) {
    var l = App.lists.findWhere({id: $(el).data("id")});
    lists.push(l);
  });
  Client.setLists(lists);

  var cards = [];
  $("#lists .card").each(function(idx, el) {
    var c = App.cards.findWhere({id: $(el).data("id")});
    cards.push(c);
  });  
  Client.setCards(cards);
}