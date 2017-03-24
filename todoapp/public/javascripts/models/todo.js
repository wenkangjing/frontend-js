var Todo = Backbone.Model.extend({
  defaults: {
    cid: "",
    title: "",
    day: "Day",
    month: "Month",
    year: "Year",
    description: "",
    completed: false,
  },
  setDueDate: function() {
    var date_string = "No Due Date";
    var month = String(this.get("month"));
    var year = String(this.get("year"));
    if (month !== "Month" && year  !== "Year") {
        date_string = month + "/" + year.slice(2)
    }
    this.set("due_date", date_string);
  },
  setCId: function() {
    this.set("cid", this.cid);
  },
  initialize: function() {
    this.setDueDate();
    this.setCId();
    this.on("change", this.setDueDate.bind(this));
  }
});