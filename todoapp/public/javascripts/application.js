var App = {
  $el: $("main"),
  templates: JST, // handlebars
  indexView: function() {
    this.index = new IndexView(); // the layout and anchor elements
    this.renderSidebar(); // all and completed
    this.renderContent(); // visible todos
  },
  //
  // filter should contain 
  //   completed:bool 
  //   due_date:string
  //
  renderContent: function(filter) {
    filter = filter || {}; 
    var title = "All Todos";
    var total = this.todos.length;
    var visible = this.todos.toJSON();

    if (filter.completed) {
      title = "Completed";
      visible = visible.filter(function(t) {
        return t.completed;
      });
    }
    if (filter.due_date) {
      title = filter.due_date;
      visible = visible.filter(function(t) {
        return t.due_date === filter.due_date;
      });
    }
    total = visible.length;

    var collection = new Todos(visible, {title: title, total: total});
    new TodosView({collection: collection});
  },
  renderSidebar: function() {
    this.$el.find("#sidebar").html("");
    var groups = this.getGroups({title: "All Todos", className: "all"});
    new GroupsView({collection: groups});
    var groups = this.getGroups({title: "Completed", className: "completed", completed: true});
    new GroupsView({collection: groups});
  },
  getGroups: function(options) {
    options = options || {};
    var groups = new Groups([], options);

    var counter = {};
    var filtered = this.todos.toJSON();
    if (options.className === "completed") {
      filtered = filtered.filter(function(t) {
        return t.completed;
      });
    }
    filtered.forEach(function(t) {
      var due_date = t.due_date;
      if (counter[due_date]) {
        counter[due_date]++;
      } else {
        counter[due_date] = 1;
      }
    });
    for (var g in counter) {
      var group = new Group({
        due_date: g, 
        count: counter[g],
        completed: options.completed || false,
      });
      groups.push(group);
    }
    return groups;
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.off()
        .on("toggle_complete", this.todos.toggleComplete.bind(this.todos));
  },
  init: function() {
    this.bindEvents();
    this.indexView();
  }
}
