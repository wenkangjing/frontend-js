var App = {
  $el: $("main"),
  templates: JST, // handlebars
  filter: { completed: false, due_date: undefined },
  render: function(filter) {
    App.filter = filter || { completed: false, due_date: undefined };
    this.renderSidebar(); // all and completed
    this.renderContent(); // visible todos
  },
  renderContent: function() {
    if (this.todosView) {
      this.todosView.remove();
    }
    this.todosView = new TodosView({collection: this.todos});
  },
  renderSidebar: function() {
    if (this.allView) {
      this.allView.remove();
    }
    if (this.completedView) {
      this.completedView.remove();
    }
    this.allView = new GroupsView({
      collection: this.getGroups({title: "All Todos", className: "all"})
    });
    this.completedView = new GroupsView({
      collection: this.getGroups({title: "Completed", className: "completed"})
    });
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
        completed: options.className === "completed" ? true : false,
      });
      groups.push(group);
    }
    return groups;
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.off()
        .on("toggle_complete", this.todos.toggleTodo.bind(this.todos))
        .on("update_todo", this.todos.updateTodo.bind(this.todos))
        .on("complete_todo", this.todos.completeTodo.bind(this.todos))
        .on("delete_todo", this.todos.deleteTodo.bind(this.todos))
        .on("filter", this.render.bind(this));
  },
  init: function() {
    this.$el = $("main");
    this.templates = JST; // handlebars
    this.filter = { completed: false, due_date: undefined };
    this.index = new IndexView(); // the layout and anchor elements
    this.bindEvents();
    this.render();
  }
}

// sync todos back to server
$(window).on("beforeunload", sync);

function sync() {
  var todos = [];
  App.todos.toJSON().forEach(function(todo) {
    delete todo.cid;
    if (todo.day === "0")         { delete todo.day; }
    if (todo.month === "0")       { delete todo.month; }
    if (todo.year === "0")        { delete todo.year; }
    if (todo.title === "")        { delete todo.title; }
    if (todo.description === "")  { delete todo.description; }
    todos.push(todo);
  });

  $.ajax({
    method: "POST",
    url: "/todos",
    async: false,
    data: {
      todos: JSON.stringify(todos)
    },
    success: function(obj) {
      console.log(obj);
    },
    error: function(obj) {
      console.log(obj);
    }
  });
}