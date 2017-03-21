var Todo = Backbone.Model.extend({
  defaults: {
    title: "",
    day: "Day",
    month: "Month",
    year: "Year",
    description: "",
    completed: false,
  },
  formatDate: function() {
    var date_string = "No Due Date";
    if (this.month !== "Month" && this.year !== "Year") {
        date_string = this.month + "/" + String(this.year).slice(2)
    }
    return date_string;
  },
  initialize: function() {
    this.due_date = this.formatDate();
  }
});