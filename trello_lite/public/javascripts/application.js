var App = {
  $el: $("#application"),
  templates: JST,
  renderBoard: function() {
    this.board.forEach(function(list) {
      this.renderList(list);
    }.bind(this));
  },
  renderList: function(list) {
    new ListView({
      id: list.id,
      name: list.name,
      subscribed: list.subscribed,
      collection: new List(list.cards)
    });
  },
  buildTemplates: function() {
    Handlebars.registerHelper('formateDate', function(dateString, options) {
      var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var now = new Date();
      var date = new Date(dateString);
      if (now.getFullYear() === date.getFullYear()) {
        return date.getDate() + " " + monthNames[date.getMonth()]
      } else {
        return date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();
      }
    });
    Handlebars.registerHelper('isDuePast', function(dateString, options) {
      var now = new Date();
      var date = new Date(dateString);
      if (now.valueOf() > date.valueOf()) {
        return "past";
      } else {
        return "";
      }
    });
  },
  init: function() {
    this.buildTemplates();
    this.renderBoard();
  }
};