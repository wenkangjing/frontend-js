var CardComposerView = Backbone.View.extend({
  className: "card-composer-wrapper",
  template: App.templates.card_composer,
  events: {
    "blur .card-composer-input": "onName",
    "mousedown .card-composer-cancel": "onCancel",
    "mousedown .card-composer-confirm": "onSave",
    "mousedown .card-composer-options": "onLabels",
  },  
  onName: function(e) {
    e.preventDefault();
    var $txt = this.$el.find(".card-composer-input");
    this.model.set("name", $txt.val());
    $txt.focus()
  },
  onCancel: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    this.trigger("card_composer_on_cancel", this.model.toJSON());
    this.uninitialize();
  },
  onSave: function(e) {
    e.preventDefault();
    var $txt = this.$el.find(".card-composer-input");
    var newName = $txt.val().trim();
    if (newName) {
      this.model.set("name", newName);
      var json = this.model.toJSON();
      // get the index to insert to
      // prev card in the save list
      var prev_card;
      if ($(".card-composer").closest(".cards").children().first().hasClass("card")) {
        prev_card = $(".card-composer").closest(".cards").find(".card").last();
      } else {
        prev_card = $(".card-composer").closest(".list").prev().find(".card").last();
      }
      // get the index of prev card in App.cards, save the new one after that
      if (prev_card.length === 0) {
        json.pos = 0;
      } else {
        var id = prev_card.data("id");
        var idx = App.cards.findIndex({id: id});
        json.pos = idx + 1;
      }
      this.trigger("card_composer_on_save", json);
      this.uninitialize();
    }
  },
  onLabels: function(e) {
    e.preventDefault();
    new LabelsPopover({
      card: this.model,
      pos: Helper.adjustPosition(e, 30)
    });
  },
  render: function() {
    var json = this.model.toJSON();
    json.labels =  Helper.getLabelObjects(this.model.get("idLabels"));
    this.$el.html(this.template(json));
  },
  uninitialize: function() {
    this.remove();
    App.trigger("clear_popover");
  },  
  initialize: function() {
    this.render();
    this.listenTo(this.model, "change remove", this.render.bind(this));
    this.listenTo(App.labels, "change update", this.render.bind(this));
  }
});