var CardMovePopover = Backbone.View.extend({
  template: App.templates.cardmove_popover,
  events: {
    "click .pop-over-header-close-btn": "onClose",
    "change .select-list": "onList",
    "change .select-position": "onPosition",
    "submit form": "onMove"
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
  onMove: function(e){
    e.preventDefault();
    var $f = $(e.target);
    App.trigger("client_move_card", this.card.get("id"), $(".select-list").val());
    this.uninitialize();
  },
  render: function() {
    this.$el.html(this.template({ lists: App.lists.toJSON() }));
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
    this.trigger("close");
  },  
  initialize: function(opt) {
    this.pos = opt.pos;
    this.card = opt.card;
    this.render();
    this.listenTo(App, "clear_popover", this.remove.bind(this));
  }
});