var Form = Backbone.View.extend({
  el: "#modal",
  template: App.templates.form,
  events: {
    "submit form": "saveAndExit",
    "click input[type=button]": "completeAndExit",
    "click #modal_background": "exit"
  },
  saveAndExit: function(e) {
    e.preventDefault();
    var todo = this.getTodo();
    App.trigger("update_todo", todo);
    this.exit();
  },
  completeAndExit: function(e) {
    e.preventDefault();
    var todo = this.getTodo(); 
    App.trigger("complete_todo", todo.cid);
    this.exit();
  },
  exit: function(e) {
    App.$el.find("#modal_form").fadeOut(500);
    App.$el.find("#modal_background").fadeOut(500);
    this.$el.html("");
  },
  getTodo: function() {
    var formdata = this.$el.find("form").serializeArray();
    var data = {};
    formdata.forEach(function(field){
      if (field.value === "false") { field.value = false; } 
      if (field.value === "true") { field.value = true; } 
      data[field.name] = field.value;
    });
    return data;
  },
  render: function() {
    this.$el.html(this.template((this.model) ? this.model.toJSON() : new Todo()));
    this.$el.find("#modal_form").fadeIn(500);
    this.$el.find("#modal_background").fadeIn(500);
  },
  initialize: function() {
    this.render();
  }
});