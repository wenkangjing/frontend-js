var Todos = Backbone.Collection.extend({
  model: Todo,
  getGroups: function(options) {
    options = options || {};
    var counter = {};
    var filtered = this.models;
    if (options.completed) {
      filtered = filtered.filter(function(t) {
        return t.get("completed");
      });
    }
    filtered.forEach(function(t) {
      var due_date = t.get("due_date");
      if (counter[due_date]) {
        counter[due_date]++;
      } else {
        counter[due_date] = 1;
      }
    });
    var groups = new Groups();
    for (var g in counter) {
      groups.push(new Group({
        due_date: g, 
        count: counter[g],
        completed: options.completed || false,
      }));
    }
    return groups;
  }
})