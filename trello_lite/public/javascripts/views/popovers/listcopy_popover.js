var ListCopyPopover = Backbone.View.extend({
  template: App.templates.listcopy_popover,
  events: {
    "click .pop-over-header-close-btn": "onClose",
    "submit form": "onCreate"
  },
  onClose: function(e) {
    e.preventDefault();
    this.uninitialize();
  },
  onCreate: function(e){
    e.preventDefault();
    var list = this.model.toJSON();
    var cards = Helper.getCardsByIdList(list.id);

    list.name = $(e.target).serializeArray()[0].value;
    var idx = App.lists.findIndex({id: list.id});
    list.pos = idx + 1;
    delete list.id;
    // copy list
    Client.saveList(list, function(id) {
      Client.getLists();
      cards.forEach(function(c) {
        delete c.id;
        c.idList = id;
        c.pos = Infinity;
        Client.saveCard(c, function() {
          Client.getCards();
        });
      });
    });
    this.uninitialize();
  },
  render: function() {
    this.$el.html(this.template({
      name: this.model.get("name")
    }));
    this.$el.find(".pop-over").offset({
      top: this.pos.top || 0,
      left: this.pos.left || 0
    }); 
    this.$el.appendTo(App.$el);
    this.delegateEvents();
  },
  uninitialize: function() {
    this.remove();
  },  
  initialize: function(opt) {
    this.pos = opt.pos;
    this.render();
    this.listenTo(App, "clear_popover", this.remove.bind(this));
  }
});