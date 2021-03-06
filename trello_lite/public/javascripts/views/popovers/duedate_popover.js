var DueDatePopover = Backbone.View.extend({
  template: App.templates.duedate_popover,
  events: {
    "click .pop-over-header-close-btn": "onClose",
    "click .duedate-save": "onSave",
    "click .duedate-remove": "onRemove",
    "keyup .card-duedate-time input": "checkTime",
    "blur .card-duedate-time input": "resetTime",
  },  
  onClose: function(e) {
    e.preventDefault();
    this.uninialize();
  },  
  onSave: function(e) {
    var due = this.picker.getDate();
    this.card.set("due", due.getTime());
    Client.saveCard(this.card.toJSON());
    Client.saveAction({
      action: "set this card to be dued " + due.toLocaleString(),
      idCard: this.card.get("id")
    });
    this.uninialize();
  },
  onRemove: function(e) {
    this.card.set("due", false);
    Client.saveCard(this.card.toJSON());
    Client.saveAction({
      action: "removed due date from this card",
      idCard: this.card.get("id")
    });
    this.uninialize();
  },  
  checkTime: function() {
    var $time = this.$el.find(".card-duedate-time input");
    if (Helper.validateTime($time.val())) {
      $time.removeClass("invalid");
    } else {
      $time.addClass("invalid");
    }
  },
  resetTime: function() {
    var $time = this.$el.find(".card-duedate-time input");
    $time.val("12:00");
    this.checkTime()
  },
  render: function() {
    // handlebars
    this.$el.html(this.template());
    this.$el.find(".pop-over").offset({
      top: this.pos.top || 0,
      left: this.pos.left || 0
    });
    this.$el.appendTo(App.$el);
    // pidaday
    var $date = this.$el.find(".card-duedate-date input");
    var $time = this.$el.find(".card-duedate-time input");
    this.picker = new Pikaday({
      field: document.getElementById('pika-datepicker'),
      format: 'DD/MM/YYYY',
      firstDay: 1,
      yearRange: [2016, 2020],
      bound: false,
      container: document.getElementById('pika-container'),
      i18n: {
        previousMonth : 'Prev',
        nextMonth     : 'Next',
        months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
        weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        weekdaysShort : ['Su','Mo','Tu','We','Th','Fr','Sa']
      }
    });
    this.picker.setDate(new Date())
    this.delegateEvents();
  },
  uninialize: function() {
    this.remove();
    this.trigger("close");
  },
  initialize: function(opt) {
    this.card = opt.card;
    this.pos = opt.pos;
    this.render();
    this.listenTo(App, "clear_popover", this.remove.bind(this));
  }
});