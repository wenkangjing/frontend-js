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
    this.renderResult();
  },
  onTyping: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    this.filter = $e.val();
    if(e.which === 13) { // enter
      this.renderResult();
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
    }
  },
  onFocus: function(e) {
    this.$el.find(".search-bar").width(300);
    this.$el.find(".search-input").width(260);
    this.$el.find(".search-start").hide();
    this.$el.find(".search-close").css({display: "block"});
    this.renderResult();
  },
  renderResult() {
    if (this.result){
      this.result.remove();
    }
    this.result = new SearchResultView({filter: this.filter});
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