var SearchBarView = Backbone.View.extend({
  el: "#header-search",
  template: App.templates.search_bar,
  events: {
    "click .search-start": "onSearch",
    "click .search-close": "onClose",
    "keyup .search-input": "onTyping",
    "focus .search-input": "onFocus",
  },
  onSearch: function(e) {
    e.preventDefault();
    this.$el.find(".search-bar").width(300);
    this.$el.find(".search-input").width(260);
    this.$el.find(".search-start").hide();
    this.$el.find(".search-close").css({display: "block"});
   if (!this.result){
      this.result = new SearchResultView({filter: ""});
    }
  },
  onTyping: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    var filter = $e.val();
    if(e.which === 13) { // enter
      if (this.result){
        this.result.remove();
      }
      this.result = new SearchResultView({filter: filter});
    } else if(e.which === 27) {
      if (this.result){
        this.result.remove();
      }
    }
  },
  onClose: function(e) {
    e.preventDefault();
    this.$el.find(".search-bar").width(200);
    this.$el.find(".search-input").width(160).val("");
    this.$el.find(".search-start").show();
    this.$el.find(".search-close").hide();
    if (this.result){
      this.result.remove();
      this.result = null;
    }
  },
  onFocus: function(e) {
    this.$el.find(".search-bar").width(300);
    this.$el.find(".search-input").width(260);
    this.$el.find(".search-start").hide();
    this.$el.find(".search-close").css({display: "block"});
   if (!this.result){
      this.result = new SearchResultView({filter: ""});
    }
  },
  render: function() {
    this.$el.html(this.template());
  },
  delete: function() {
    if (this.result){
      this.result.remove();
    }
    this.remove();
  },
  initialize: function() {
    this.render();
  }
});