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
    if (this.get("month") !== "Month" && this.get("year") !== "Year") {
        date_string = this.get("month") + "/" + String(this.get("year")).slice(2)
    }
    return date_string;
  },
  initialize: function() {
    this.set("due_date", this.formatDate());
  }
});