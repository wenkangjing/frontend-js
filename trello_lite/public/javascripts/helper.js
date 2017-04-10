var Helper = {
  //
  // data
  /////////////////////////////////////////////////////
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
  getActivitiesByCard: function(idCard) {
    return App.activities.toJSON().filter(function(cmt) {
      return cmt.idCard === idCard;
    }).sort(function(a, b) {
      return a.created < b.created;
    });    
  },
  getCommentsCount: function(idCard) {
    return App.activities.toJSON().reduce(function(count, cmt) {
       if (cmt.idCard === idCard && !!cmt.comment) {
         return count + 1
       } else {
         return count;
       }
    }, 0);
  },  
  getCardsByIdList: function(idList) {
    return App.cards.toJSON().filter(function(c) {
      return c.idList === idList;
    })
  },

  //
  // display
  /////////////////////////////////////////////////////  
  registerHelpers: function() {
    Handlebars.registerHelper('formatDate', function(dateValue, options) {
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
    Handlebars.registerHelper('formatDatetime', function(dateValue, options) {
      var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var now = new Date();
      var datetime = new Date(dateValue);
      var formatedString;
      if (now.getFullYear() === datetime.getFullYear()) {
        formatedString = datetime.getDate() + " " + monthNames[datetime.getMonth()]
      } else {
        formatedString = datetime.getDate() + " " + monthNames[datetime.getMonth()] + " " + datetime.getFullYear();
      }
      formatedString += " at ";
      formatedString += datetime.getHours() + ":" + datetime.getMinutes();
      return formatedString;
    });
  },
  validateTime: function(time_stirng) {
    var re = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return re.test(time_stirng);
  },
  // popover
  adjustPositionOffset: function(e, offsetY) {
    var pos = $(e.currentTarget).offset();
    var result = {};
    if (pos.top + offsetY + 400 > innerHeight) {
      result.top = innerHeight - 400;
    } else {
      result.top = pos.top + offsetY;
    }

    if (pos.left + 350 > innerWidth) {
      result.left = innerWidth - 350;
    } else {
      result.left = pos.left;
    }
    return result;
  }, 
  adjustPosition: function(top, left) {
    var pos = {
      top: top,
      left: left
    };
    if (top + 160 > innerHeight) {
      pos.top= innerHeight - 160;
    } 
    if (left + 300 > innerWidth) {
      pos.left = innerWidth - 300;
    } 
    return pos;
  }
}