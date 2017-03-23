var Todo = Backbone.Model.extend({
  defaults: {
    id: -1,
    title: "",
    day: "Day",
    month: "Month",
    year: "Year",
    description: "",
    completed: false,
  },
  setDueDate: function() {
    var date_string = "No Due Date";
    if (this.get("month") !== "Month" && this.get("year") !== "Year") {
        date_string = this.get("month") + "/" + String(this.get("year")).slice(2)
    }
    this.set("due_date", date_string);
  },
  initialize: function() {
    this.setDueDate();
    this.on("change", this.setDueDate.bind(this));
  }
});