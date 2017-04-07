var LabelsPopover = Backbone.View.extend({
  template: App.templates.labels_popover,
  events: {
    "click .pop-over-header-close-btn": "close",
    "click .card-label ": "toggleLabel",
    "click .card-label-edit-btn": "editLabel",
    "click .card-label-add": "newLabel",
  },
  close: function(e) {
    e.preventDefault();
    PopoverUtil.closeCurrent();
  },
  toggleLabel: function(e) {
    e.preventDefault();
    var idLabels = _.clone(this.card.get("idLabels"));
    var $lb = $(e.target).closest(".card-label");
    var id = $lb.data("id");
    if ($lb.hasClass("selected")) {
      $lb.removeClass("selected");
      idLabels = _(idLabels).without(id);
    } else {
      $lb.addClass("selected");
      idLabels.push(id);
    }
    this.card.set("idLabels", idLabels);
    App.trigger("save_card", this.card.toJSON());
  },
  editLabel: function(e) {
    e.preventDefault();
    var $lb = $(e.target).siblings(".card-label");
    var id = $lb.data("id");
    PopoverUtil.labelEdit({
      idCard: this.card.get("id"),
      pos: this.pos,
      model: this.collection.get(id) 
    });
    this.remove();
  },
  newLabel: function(e) {
    e.preventDefault();
    PopoverUtil.labelEdit({
      idCard: this.card.get("id"),
      pos: this.pos,
    });
    this.remove();
  },
  render: function() {
    var labels = this.collection.toJSON();
    var idLabels = this.card.get("idLabels");
    labels.forEach(function(label) {
      if (idLabels.indexOf(label.id) !== -1) {
        label.selected = true;
      } else {
        label.selected = false;
      }
    }.bind(this));
    this.$el.html(this.template({
      labels: labels
    }));

    this.$el.find(".pop-over").offset({
      top: this.pos.top || 0,
      left: this.pos.left || 0
    });
    this.$el.appendTo(App.$el);
    this.delegateEvents();
  },
  initialize: function(opt) {
    this.card = App.cards.get({id: opt.idCard});
    this.pos = opt.pos;
    this.collection = App.labels;
    this.render();
    this.listenTo(App.labels, "change update", this.render.bind(this));
  }
});