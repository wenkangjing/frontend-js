var DueDatePopover = Backbone.View.extend({
  template: App.templates.duedate_popover,
  events: {
    "click .pop-over-header-close-btn": "closePopover",
    "click .duedate-save": "saveDueDate",
    "click .duedate-remove": "removeDueDate",
    "keyup .card-duedate-time input": "checkTime",
    "blur .card-duedate-time input": "resetTime",
  },  
  closePopover: function(e) {
    e.preventDefault();
    this.remove();
    App.popoverView = null;
  },  
  saveDueDate: function(e) {
    var due = this.picker.getDate();
    this.card.set("due", due.getTime());
    App.trigger("save_card", this.card.toJSON());
    App.trigger("save_action", {
      action: "set this card to be dued " + due.toLocaleString(),
      idCard: this.card.get("id")
    });
    this.closePopover(e);
  },
  removeDueDate: function(e) {
    this.card.set("due", false);
    App.trigger("save_card", this.card.toJSON());
    App.trigger("save_action", {
      action: "removed due date from this card",
      idCard: this.card.get("id")
    });
    this.closePopover(e);
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
    this.$el.find(".pop-over").css({
      top: App.popoverOpt.position.top || 0,
      left: App.popoverOpt.position.left || 0
    });
    this.$el.appendTo(App.popoverOpt.parent);
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

  initialize: function() {
    this.card = App.cards.get(App.popoverOpt.idCard);
    this.render();
  }
});