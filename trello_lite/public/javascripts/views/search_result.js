var SearchResultView = Backbone.View.extend({
  template: App.templates.search_result,
  events: {
    "click .card-thumbnail": "onCard", // target on this.el
  },
  onCard: function(e) {
    e.preventDefault();
    var $e = $(e.target);
  },
  render: function() {
    this.$el.html(this.template({result: App.cards.toJSON()}));
    this.$el.appendTo(App.$el);
  },
  initialize: function() {
    this.render();
    this.listenTo(App, "close_search", this.remove.bind(this));
  }
});