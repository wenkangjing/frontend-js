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
  popoverCardEdit: function(model) {
    console.log("popoverCardEdit - inline card editor");
  },
  popoverLabels: function(opt) {
    console.log("labels");
    if (App.popover) { 
      App.popover.remove(); 
    }
    App.popover = new LabelsPopover({
      parent: opt.parent,
      position: opt.position,
      card: App.cards.get(opt.idCard),
      collection: App.labels
    });
  },
  popoverLabelEdit: function(opt) {
    if (App.popover) { 
      App.popover.remove(); 
    }
    App.popover = new LabelEditPopover({
      parent: opt.parent,
      position: opt.position,
      card: App.cards.get(opt.idCard),
    });
  },
  popoverDueDate: function(opt) {
    if (App.popover) { 
      App.popover.remove(); 
    }
    App.popover = new DueDatePopover({
      parent: opt.parent,
      position: opt.position,
      card: App.cards.get(opt.idCard),
    });
  },  
  popoverMove: function(opt) {
    console.log("move");
  },
  popoverCopy: function(opt) {
    console.log("copy");
  },
  popoverConfirm: function(opt) {
    console.log("confirm");
  },
  goto: function(fregment, trigger) {
    trigger = trigger || false;
    this.router.navigate(fregment, {trigger: trigger});
  },
  buildEvents: function() {
    this.off().on({
      // UI state
      "popover_cardedit": this.popoverCardEdit.bind(this),
      "popover_labels": this.popoverLabels.bind(this),
      "popover_labeledit": this.popoverLabelEdit.bind(this),
      "popover_move": this.popoverMove.bind(this),
      "popover_copy": this.popoverCopy.bind(this),
      "popover_duedate": this.popoverDueDate.bind(this),
      "popover_confirm": this.popoverConfirm.bind(this),
      // Client request
      "save_card": Client.saveCard.bind(Client),
      "delete_card": Client.deleteCard.bind(Client),
      "save_label": Client.saveLabel.bind(Client),
    });
  },
  init: function() {
    _.extend(this, Backbone.Events);
    Helper.buildTemplates();
    this.buildEvents();
    this.createRouter();
  }
};


