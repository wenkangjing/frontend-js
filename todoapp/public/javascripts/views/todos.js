var TodosView = Backbone.View.extend({
  template: App.templates.todos,
  events: {
    "click #todos tr.todo td:first-child": "toggleComplete",
    "click #todos tr.todo td:last-child": "delete",
    "click #todos tr.todo .title": "edit",
    "click .add": "add",
  },
  getCId: function(e) {
    return $(e.target).closest(".todo").data("cid");
  },
  add: function(e) {
    e.preventDefault();
    e.stopPropagation();
    new Form({model: new Todo()});
  },
  edit: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var todo = this.collection.get(this.getCId(e));
    new Form({model: todo});
  },
  delete: function(e) {
    e.preventDefault();
    e.stopPropagation();
    App.trigger("delete_todo", this.getCId(e));
  },
  toggleComplete: function(e) {
    e.preventDefault();
    e.stopPropagation();
    App.trigger("toggle_complete", this.getCId(e));
  },
  render: function() {
    var visible = this.getVisible();
    if (visible.todos.length === 0 && App.todos.length > 0) {
      App.trigger("filter");
      this.remove();
      return;
    }
    this.$el.html(this.template({
      content_title: visible.title,
      content_total: visible.todos.length,
      todos: visible.todos
    }));
    this.$el.appendTo(App.$el.find("#content"));
    this.$modal = this.$el.find("#modal_form");
    this.$modal_bg = this.$el.find("#modal_background");
  },
  getVisible: function() {
    var visible = {
      title: "All Todos",
      todos: this.collection.toJSON()
    };
    visible.todos = visible.todos.filter(function(t) {
      if (App.filter.completed) {
        visible.title = "Completed";
        return t.completed;
      } else {
        return true;
      }
    }).filter(function(t) {
      if (App.filter.due_date) {
        visible.title = App.filter.due_date;
        return t.due_date === App.filter.due_date;
      } else {
        return true;
      }
    });
    return visible;
  },
  initialize: function() {
    Handlebars.registerHelper('select', function( value, options ){
        var $el = $('<select />').html( options.fn(this) );
        $el.find('[value="' + value + '"]').attr({'selected':'selected'});
        return $el.html();
    }); 
    this.render();
    this.listenTo(App.todos, "change update", App.renderContent.bind(App));
  }
});