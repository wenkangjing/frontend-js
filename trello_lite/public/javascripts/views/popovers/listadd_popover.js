var ListAddPopover = Backbone.View.extend({
  template: App.templates.listadd_popover,
  events: {
    "click .pop-over-header-close-btn": "onClose",
    "change .select-position": "onPosition",
    "submit form": "onCreate"
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
  onCreate: function(e){
    e.preventDefault();
    var $f = $(e.target);
    var list = {};

    var values = $f.serializeArray();
    list.name = values[0].value;
    var pos = $(".select-position").val() - 1;
    list.pos = pos;
    Client.saveList(list, function(id) {
      Client.getLists();
    });
    this.uninitialize();
  },
  render: function() {
    this.$el.html(this.template({
      lists: App.lists.toJSON()
    }));
    this.$el.find(".pop-over").offset({
      top: this.pos.top || 0,
      left: this.pos.left || 0
    });
    var count = App.lists.length;
    var opts = [];
    for (var i = 1; i <= count + 1; i++) {
      opts.push("<option>" + i + "</option>");
    }
    this.$el.find(".select-position").html(opts);
    this.$el.appendTo(App.$el);
    this.$el.find(".list-name input").focus().select();
    $(".select-position").trigger("change", 0);
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