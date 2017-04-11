var ListMovePopover = Backbone.View.extend({
  template: App.templates.listmove_popover,
  events: {
    "click .pop-over-header-close-btn": "onClose",
    "change .select-position": "onPosition",
    "submit form": "onMove"
  },
  onClose: function(e) {
    e.preventDefault();
    this.uninitialize();
  },
  onPosition: function(e){
    e.preventDefault();
    var pos = $(e.target).val();
    this.$el.find(".position-value").text(pos);
  },
  onMove: function(e){
    e.preventDefault();
    var pos = +$(".select-position").val();
    var $before = App.$el.find("#lists .list").eq(pos);
    var $list = App.$el.find("#lists .list[data-id=" + this.model.get("id") + "]");
    if (pos === 4) {
      $list.appendTo(App.$el.find("#lists"));
    } else if (pos === 1) {
       $list.prependTo(App.$el.find("#lists"));
    } else {
      $list.insertBefore($before);
    }
    App.trigger("sync_board");
    this.uninitialize();
  },
  render: function() {
    this.$el.html(this.template());
    var opts = [];
    for (var i = 1; i <= App.lists.length; i++) {
      opts.push("<option>" + i + "</option>");
    }
    this.$el.find(".select-position").html(opts);
    this.$el.find(".pop-over").offset({
      top: this.pos.top || 0,
      left: this.pos.left || 0
    });
    this.$el.appendTo(App.$el);
    $(".select-position").trigger("change", 0);
    this.delegateEvents();
  },
  uninitialize: function() {
    this.remove();
    this.trigger("close");
  },  
  initialize: function(opt) {
    this.pos = opt.pos;
    this.render();
    this.listenTo(App, "clear_popover", this.remove.bind(this));
  }
});