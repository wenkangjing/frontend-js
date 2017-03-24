var GroupsView = Backbone.View.extend({
  tagName: "section",
  template: App.templates.groups,
  events: {
    "click .group": "filter",
  },
  filter: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var $el = $(e.currentTarget);
    var filter = {
      completed: $el.closest("section")[0].className === "completed" ? true : false,
      due_date: $el.find(".due-date").text() || undefined
    };
    App.trigger("filter", filter);
  },
  hightlight: function() {
    if ((App.filter.completed ? "completed" : "all") === this.collection.className) {
      this.$el.find(".active").removeClass("active");
      var $active = this.$el.find(".due-date").filter(function(idx, item) {
        return $(item).text() === App.filter.due_date;
      });
      if ($active.length === 0) {
        $active = this.$el.find("h1.group");
        $active.addClass("active");
      } else {
        $active.closest(".group").addClass("active");
      }
    }
  },
  render: function() { // deply attach to the DOM
    this.$el.html(this.template({
      title: this.collection.getTitle(),
      total: this.collection.getTotal(),
      groups: this.collection.toJSON(),
    }));
    this.$el.addClass(this.collection.className);
    this.$el.appendTo(App.$el.find("#sidebar"));
    this.hightlight();
  },
  initialize: function(options) {
    this.render();
    this.listenTo(App.todos, "change update", App.renderSidebar.bind(App));
  }
});