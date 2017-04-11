var SearchResultView = Backbone.View.extend({
  template: App.templates.search_result,
  events: {
     "keyup .search-result": "onTyping",
     "mouseover .card-thumbnail": "onMouseOver",
     "mouseleave .card-thumbnail": "onMouseLeave",
     "click .card-thumbnail": "onClickThumbnail"
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
  onClickThumbnail: function(e) {
    e.preventDefault();
    var idCard = $(e.currentTarget).closest("li").data("id");
    App.renderCardModal(idCard);
    App.goto("/cards/" + idCard);
    this.remove();
  },
  render: function() {
    // filter
    var searched_string = this.filter;
    var cards = [];
    if (searched_string) {
      cards = App.cards.toJSON();
      if (searched_string.startsWith("#")) { // search label
        searched_string = searched_string.slice(1);
        var searched_labels =App.labels.toJSON().filter(function(lb) {
          return lb.name.toLowerCase().indexOf(searched_string) !== -1;
        });
        cards.filter(function(c) {
          return searched_labels.some(function(lb) {
            return c.idLabels.indexOc(lb.id) !== -1
          });
        });
      } else { // search keyword
        cards = cards.filter(function(c) {
          return c.name.toLowerCase().indexOf(searched_string.toLowerCase()) !== -1;
        });
      }
    }

    // show
    cards.forEach(function(c) {
      c.labels = Helper.getLabelObjects(c.idLabels);
      c.list = Helper.getListName(c.idList);
    });
    this.$el.html(this.template({cards: cards}));
    this.$el.appendTo(App.$el);
  },
  initialize: function(opt) {
    this.filter = opt.filter || "";
    this.render();
    this.listenTo(App, "close_search", this.remove.bind(this));
  }
});