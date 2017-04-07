var CardComposerView = Backbone.View.extend({
  template: App.templates.card_composer,
  events: {
    "click .card-composer-cancel": "onCancel",
    "click .card-composer-confirm": "onSave",
    "click .card-composer-options": "onLabels",
  },
  onTyping: function(e) {
     var name = this.$input.val();
     this.model.set("name", name);
  },
  onCancel: function(e) {
    e.preventDefault();
    PopoverUtil.closeCurrent();
    var $e = $(e.target);
    this.trigger("card_composer_on_cancel", this.model.toJSON());
    this.remove();
  },
  onSave: function(e) {
    e.preventDefault();
    PopoverUtil.closeCurrent();
    var name = this.$input.val();
    this.model.set("name", name);
    this.trigger("card_composer_on_save", this.model.toJSON());
    this.remove();
  },
  onLabels: function(e) {
    e.preventDefault();
    PopoverUtil.labels({
      card: this.model,
      pos: PopoverUtil.getPosition(e)
    });
  },
  render: function() {
    PopoverUtil.renderCurrent();
    var json = this.model.toJSON();
    json.labels =  Helper.getLabelObjects(this.model.get("idLabels"));
    this.$el.html(this.template(json));
    this.$input = this.$el.find(".card-composer-input");
    this.$input.off().on("blur", this.onTyping.bind(this));
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, "change remove", this.render.bind(this));
    this.listenTo(App.labels, "change update", this.render.bind(this));
    PopoverUtil.closeCurrent();
  }
});