var SearchResultView = Backbone.View.extend({
  template: App.templates.search_result,
  events: {
     "keyup .search-result": "onTyping",
     "mouseover .card-thumbnail": "onMouseOver",
     "mouseleave .card-thumbnail": "onMouseLeave",
  },
  onTyping: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    if(e.which === 27) {
      this.remove();
    }
  },
  onMouseOver: function(e) {
    this.$el.find(".card-thumbnail").not($(e.currentTarget)).css({
      transform: "scale(0.9)",
      opacity: 0.5
    })
    $(e.currentTarget).css({transform: "scale(1.1)"});
  },
  onMouseLeave: function(e) {
    this.$el.find(".card-thumbnail").css({
      transform: "scale(1)", 
      opacity: 1
    })
  },  
  render: function() {
    // filter

    // show
    var cards = App.cards.toJSON();
    cards.forEach(function(c) {
      c.labels = Helper.getLabelObjects(c.idLabels);
    });
    this.$el.html(this.template({cards: cards}));
    this.$el.appendTo(App.$el);
  },
  initialize: function() {
    this.render();
    this.listenTo(App, "close_search", this.remove.bind(this));
  }
});