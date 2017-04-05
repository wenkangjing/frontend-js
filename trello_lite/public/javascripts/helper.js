var Helper = {
  // returns plain object
  getLabelObjects: function(ids) {
    var labels = [];
    var ids = ids || [];
    ids.forEach(function(id) {
      var found = App.labels.findWhere({id: id});
      if (found) {
        var label = found.toJSON();
        labels.push(label);
      }
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
    Handlebars.registerHelper('formateDate', function(dateValue, options) {
      var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var now = new Date();
      var date = new Date(dateValue);
      if (now.getFullYear() === date.getFullYear()) {
        return date.getDate() + " " + monthNames[date.getMonth()]
      } else {
        return date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();
      }
    });
    Handlebars.registerHelper('isDuePast', function(dateValue, options) {
      var now = new Date();
      if (now.valueOf() > dateValue) {
        return "past";
      } else {
        return "";
      }
    });
    Handlebars.registerHelper('toRGB', function(colorName, options) {
      var obj = _(App.colors).findWhere({name: colorName || "nocolor"}) || {};
      return obj.color;
    });
  },
  validateTime: function(time_stirng) {
    var re = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return re.test(time_stirng);
  },
  popoverPosition: function(e) {
    var pos = $(e.currentTarget).position();
    var result = {
      top: pos.top + 50
    };
    var windowWidth = $(document.body).innerWidth();
    if (pos.left + 350 > windowWidth) {
      result.left = windowWidth - 350;
    } else {
      result.left = pos.left;
    }
    return result;
  },  
}