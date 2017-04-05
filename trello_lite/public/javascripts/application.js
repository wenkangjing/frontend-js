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
    if (this.popoverView) { 
      this.popoverView.remove(); 
    }
    this.popoverView = new LabelsPopover(opt);
  },
  popoverLabelEdit: function(opt) {
    if (this.popoverView) { 
      this.popoverView.remove(); 
    }
    this.popoverView = new LabelEditPopover(opt);
  },
  popoverDueDate: function(opt) {
    if (this.popoverView) { 
      this.popoverView.remove(); 
    }
    this.popoverView = new DueDatePopover(opt)
  },  
  popoverMove: function(opt) {
    console.log("move");
  },
  popoverCopy: function(opt) {
    console.log("copy");
  },
  popoverLabelConfirm: function(opt) {
    if (this.popoverView) { 
      this.popoverView.remove(); 
    }
    this.popoverView = new LabelDeletePopover(opt)
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
      "popover_labeldelete": this.popoverLabelConfirm.bind(this),
      "popover_move": this.popoverMove.bind(this),
      "popover_copy": this.popoverCopy.bind(this),
      "popover_duedate": this.popoverDueDate.bind(this),
      // Client request
      "save_card": Client.saveCard.bind(Client),
      "delete_card": Client.deleteCard.bind(Client),
      "save_label": Client.saveLabel.bind(Client),
      "delete_label": Client.deleteLabel.bind(Client),
      "save_comment": Client.saveComment.bind(Client),
      "delete_comment": Client.deleteComment.bind(Client),
    });
  },
  init: function() {
    _.extend(this, Backbone.Events);
    this.popoverView = null; // reference of current popover view
    this.popoverOpt = {}; // FIXME useme not veiw initialize opt, parent changes
    Helper.buildTemplates();
    this.buildEvents();
    this.createRouter();
  }
};


