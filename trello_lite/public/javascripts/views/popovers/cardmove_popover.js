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
    var count = Helper.getCardsByIdList(idList).length;
    var opts = [];
    for (var i = 1; i <= count + 1; i++) {
      opts.push("<option>" + i + "</option>");
    }
    this.$el.find(".select-position").html(opts);
  },
  onPosition: function(e){
    e.preventDefault();
    var pos = $(e.target).val();
    this.$el.find(".position-value").text(pos);
  },
  onMove: function(e){
    e.preventDefault();
    var $f = $(e.target);
    var pos = $(".select-position").val() - 1;
    var idList = $(".select-list").val();

    var $card = App.$el.find(".card[data-id=" + this.card.get("id") + "]");
    var $list_dest = App.$el.find(".list[data-id=" + idList + "]");
    var $card_dest = $list_dest.find(".card")[pos];
    if ($card_dest) {
      $card.insertBefore($card_dest);
    } else {
      $card.appendTo($list_dest.find(".cards"));
    }
    Client.moveCard(this.card.get("id"), idList, function() {
      App.trigger("sync_board");
    });
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