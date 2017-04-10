var SearchBarView = Backbone.View.extend({
  el: "#header-search",
  template: App.templates.search_bar,
  events: {
    "click .search-start": "onSearch",
    "click .search-close": "onClose",
    "keyup .search-input": "onEnter",
  },
  onSearch: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    if (this.result){
      this.result.remove();
    }    
    this.result = new SearchResultView({filter: "abc"});
  },
  onEnter: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    if (this.result){
      this.result.remove();
    }    
    this.result = new SearchResultView({filter: "abc"});
  },
  onClose: function(e) {
    e.preventDefault();
    if (this.result){
      this.result.remove();
    }
  },  
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
    this.listenTo(App, "close_search", this.remove.bind(this));
  }
});