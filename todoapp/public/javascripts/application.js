var App = {
  $el: $("main"),
  templates: JST, // handlebars
  indexView: function() {
    this.index = new IndexView();
    this.renderTodos();
    this.renderGroupsAll();
    //this.renderGroupsCompleted();
  },
  renderTodos: function() {
    this.todos.each(function(todo) {
      new TodoView({model: todo});
    });
  },
  renderGroupsAll: function() {
    var groups = this.getGroups({title: "All Todos", className: "all"});
    new GroupsView({collection: groups});
  },
  renderGroupsCompleted: function() {
    var groups = this.getGroups({title: "Completed", className: "completed"});
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
  },
  init: function() {
    this.bindEvents();
    this.indexView();
  }
}
