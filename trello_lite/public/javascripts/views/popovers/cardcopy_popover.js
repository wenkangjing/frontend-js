var CardCopyPopover = Backbone.View.extend({
  template: App.templates.cardcopy_popover,
  events: {
    "click .pop-over-header-close-btn": "onClose",
    "change .select-list": "onList",
    "change .select-position": "onPosition",
    "submit form": "onCreate"
  },
  onClose: function(e) {
    e.preventDefault();
    this.uninitialize();
  },
  onList: function(e){
    e.preventDefault();
    var idList = $(e.target).val();
    var list = App.lists.findWhere({id: idList});
    this.$el.find(".list-value").text(list.get("name"));
  },
  onPosition: function(e){
    e.preventDefault();
    var pos = $(e.target).val();
    this.$el.find(".position-value").text(pos);
  },
  onCreate: function(e){
    e.preventDefault();
    var $f = $(e.target);
    var values = $f.serializeArray();
    var newCard = this.card.toJSON();
    delete newCard.id;
    delete newCard.due;
    newCard.name = values[0].value;
    if (values.length === 1) { // no labels
      delete newCard.idLabels;
    }
    newCard.idList = $(".select-list").val();
    App.trigger("client_save_card", newCard);
    App.trigger("client_get_cards");
    this.uninitialize();
  },
  render: function() {
    this.$el.html(this.template({
      cardName: this.card.get("name"),
      labelCount: this.card.get("idLabels").length,
      lists: App.lists.toJSON()
    }));
    this.$el.find(".pop-over").offset({
      top: this.pos.top || 0,
      left: this.pos.left || 0
    });    
    this.$el.appendTo(App.$el);
    $(".select-list").trigger("change", 0);
    $(".select-position").trigger("change", 0);
    this.delegateEvents();
  },
  uninitialize: function() {
    this.remove();
  },  
  initialize: function(opt) {
    this.pos = opt.pos;
    this.card = opt.card;
    this.render();
    this.listenTo(App, "clear_popover", this.remove.bind(this));
  }
});