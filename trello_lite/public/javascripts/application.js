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
    this.dndCard();
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
  renderMenu: function(e) {
    if (this.menu) {
      this.menu.remove();
    }
    this.menu = new MenuView();
  },
  renderNotification: function(e) {
    if (this.notification) {
      this.notification.remove();
    }    
    this.notification = new NotificationView();
  },

  //
  // Client 
  //////////////////////////////////////////////
  syncBoard: function() {
    var lists = [];
    $("#lists .list").each(function(idx, el) {
      var l = App.lists.findWhere({id: $(el).data("id")});
      lists.push(l);
    });
    Client.setLists(lists, function() {
      Client.getLists();
    });

    var cards = [];
    $("#lists .card").each(function(idx, el) {
      var c = App.cards.findWhere({id: $(el).data("id")});
      cards.push(c);
    });
    Client.setCards(cards, function() {
      Client.getCards();
    });
  },

  dumpBoard: function() {
    App.lists.toJSON().forEach(function(l) {
      console.log('list:', l.name);
    });
    App.cards.toJSON().forEach(function(c) {
      console.log('card:', c.name);
    });    
  },

  // 
  // init
  /////////////////////////////////////////////
  dndList: function() {
    if (this.listDrake) {
      this.listDrake.destroy();
    }
    this.listDrake = dragula([document.getElementById("lists")], {
      moves: function(el, container, handle) {
        return $(handle).closest(".card").length === 0;
      }
    }).on('drag', function (el, source) {
      var $el = $(el);
      $el.addClass("dragging");
    }).on('drop', function (el, target, source, sibling) {
      $(el).removeClass("dragging list-placeholder");
      App.trigger("sync_board");
    }).on('cancel', function (el, container, source) {
      $(el).removeClass("dragging list-placeholder");
    }).on("shadow", function(el, container, source) {
      $(el).addClass('list-placeholder');
    });
  },
  dndCard: function() {
    if (this.cardDrake) {
      this.cardDrake.destroy();
    }    
    var array = [];
    App.$el.find(".cards").each(function(idx, el) {
      array.push(el);
    });
    
    this.cardDrake = dragula(array).on('drag', function (el, source) {
      $(el).addClass("dragging");
    }).on('drop', function (el, target, source, sibling) {
      var $el = $(el);
      $el.removeClass("dragging card-placeholder");
      var idCard = $el.data("id");
      var idList = $(target).closest(".list").data("id");
      var card = App.cards.findWhere({id: idCard});
      if (card.get("idList") !== idList) {
        Client.moveCard(idCard, idList, function() {
          App.trigger("sync_board");
        });
      }
    }).on('cancel', function (el, container, source) {
      $(el).removeClass("dragging");
    }).on("shadow", function(el, container, source) {
      $(el).addClass('card-placeholder');
    });   
  },
  buildEvents: function() {
    // application events
    this.off().on({
      "sync_board": this.syncBoard,
    });
    // model/collection events
    this.listenTo(this.cards, "update", this.renderBoard.bind(this));
    this.listenTo(this.lists, "update", this.renderBoard.bind(this));
    // user events
    this.$el.on("click", ".border-notification", this.renderNotification.bind(this));
    this.$el.on("click", ".border-menu", this.renderMenu.bind(this));
  },
  init: function() {
    _.extend(this, Backbone.Events);
    Helper.registerHelpers();
    this.buildEvents();
    this.createRouter();
    this.dndList();
    this.dumpBoard();
  }
};


