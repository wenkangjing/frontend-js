var CardView = Backbone.View.extend({
  className: "card",
  template: App.templates.card,
  events: {
    "click": "onClick", // target on this.el
  },
  onClick: function(e) {
    e.preventDefault();
    var id =  this.model.get("id");
    var $e = $(e.target);
    if ($e.hasClass("card-editor-btn")) {
      App.renderCardEditor(id, $e.closest(".card").offset()); // relative to the document
    } else {
      App.renderCardModal(id);
      App.goto("/cards/" + id);
    }
  },
  render: function() {
    var json = this.model.toJSON();
    json.labels = Helper.getLabelObjects(this.model.get("idLabels"));
    json.comments = Helper.getCommentsCount(this.model.get("id"));
    var idList = this.model.get("idList");
    var parent = App.$el.find(".list[data-id=" + idList + "] .cards");
    this.$el.html(this.template(json));
    this.$el.attr("data-id", this.model.id);
    var $elOld = parent.find(".card[data-id=" + this.model.id + "]");
    if ($elOld.length > 0) {
      $elOld.html(this.$el.html());
    } else {
      this.$el.appendTo(parent);
    }
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, "change", this.render.bind(this));
    this.listenTo(this.model, "remove", this.remove.bind(this));
    this.listenTo(App.labels, "update", this.render.bind(this));
    this.listenTo(App.activities, "change update", this.render.bind(this));
  }
});