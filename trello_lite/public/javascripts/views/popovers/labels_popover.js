var LabelsPopover = Backbone.View.extend({
  template: App.templates.labels_popover,
  events: {
    "click .pop-over-header-close-btn": "onClose",
    "click .card-label ": "toggleLabel",
    "click .card-label-edit-btn": "onEdit",
    "click .card-label-add": "onNew",
    "keyup .card-label-search": "onFilter",
  },
  onClose: function(e) {
    e.preventDefault();
    this.uninitialize();
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
    if (this.card.get("id")) {
      Client.saveCard(this.card.toJSON());
    }
  },
  onEdit: function(e) {
    e.preventDefault();
    var $lb = $(e.target).siblings(".card-label");
    var id = $lb.data("id");
    new LabelEditPopover({
      card: this.card,
      pos: this.pos,
      model: this.collection.get(id) 
    });
    this.uninitialize();
  },
  onNew: function(e) {
    e.preventDefault();
    new LabelEditPopover({
      card: this.card,
      pos: this.pos,
    });
    this.uninitialize();
  },
  onFilter: function(e) {
    this.filterLabels($(e.target).val().trim());
    $(e.target).focus();
  },
  filterLabels: function(filter) {
    this.$el.find(".card-label-list li").each(function(idx, li) {
      var text = $(li).find(".card-label").text().toLowerCase();
      if (text.indexOf(filter) === -1) {
        $(li).css({display: "none"});
      } else {
        $(li).css({display: "block"});
      }
    });
  },
  render: function() {
    if (this.pLabelEdit) {
      this.pLabelEdit.remove();
      this.pLabelEdit = null;
    }
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
  uninitialize: function() {
    this.remove();
  },  
  initialize: function(opt) {
    this.card = opt.card;
    this.pos = opt.pos;
    this.collection = App.labels;
    this.render();
    this.listenTo(App.labels, "change update", this.render.bind(this));
    this.listenTo(App, "clear_popover", this.remove.bind(this));
  }
});