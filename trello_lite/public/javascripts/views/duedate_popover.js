var DueDatePopover = Backbone.View.extend({
  template: App.templates.duedate_popover,
  render: function() {
    this.$el.html(this.template());
    var picker = new Pikaday(
    {
        field: document.getElementById('pika-datepicker'),
        firstDay: 1,
        minDate: new Date(2016, 0, 1),
        maxDate: new Date(2020, 12, 31),
        yearRange: [2016, 2020],
        bound: false,
        container: document.getElementById('pika-container'),
    });
  },
  initialize: function() {
    this.render();
  }
});