var Todo = Backbone.Model.extend({
  defaults: {
    cid: "",
    title: "",
    day: 0,
    month: 0,
    year: 0,
    description: "",
    completed: false,
  },
  setDueDate: function() {
    var date_string = "No Due Date";
    var month = String(this.get("month"));
    var year = String(this.get("year"));
    if (month !== "0" && year  !== "0") {
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