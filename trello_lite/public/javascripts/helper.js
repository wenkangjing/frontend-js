var Helper = {
  // returns plain object
  getLabelObjects: function(ids) {
    var labels = [];
    var ids = ids || [];
    ids.forEach(function(id) {
      var label = App.labels.findWhere({id: id}).toJSON();
      labels.push(label);
    });
    return labels;
  },
  // returns an array of card model
  getCardModels: function(ids) {
    var cards = [];
    var ids = ids || [];
    ids.forEach(function(id) {
      var card = App.cards.findWhere({id: id});
      cards.push(card);
    }); 
    return cards;
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
}