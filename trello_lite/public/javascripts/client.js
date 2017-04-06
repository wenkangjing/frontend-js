var Client = {
  // 
  // cards
  ////////////////////////////////////////  
  getCards: function() {
    $.ajax({
     method: "get",
     url: "/cards",
    }).done(function(json) {
      App.cards.set(json);
    }).fail(function() {
      console.error("Fail to get cards");
      App.goto("/");
    });
  },  
  saveCard: function(card) {
    delete card.comments;
    var json = JSON.stringify(card);
    $.ajax({
     method: "post",
     url: "/cards",
     contentType: "application/json",
     data: json
    }).done(function(json) {
      Client.getCards();
    }).fail(function() {
      console.error("Fail to save card: " + card);
      App.goto("/");
    });
  },
  deleteCard: function(id) {
    $.ajax({
     method: "delete",
     url: "/cards",
     data: {id: id}
    }).done(function(json) {
      Client.getCards();
    }).fail(function() {
      console.error("Fail to delete card: " + id);
      App.goto("/");
    });
  },
  // 
  // labels
  ////////////////////////////////////////  
  getLabels: function() {
    $.ajax({
     method: "get",
     url: "/labels",
    }).done(function(json) {
      App.labels.set(json);
    }).fail(function() {
      console.error("Fail to get labels");
      App.goto("/");
    });
  },
  saveLabel: function(label) {
    var json = JSON.stringify(label);
    console.log(json)
    $.ajax({
     method: "post",
     url: "/labels",
     contentType: "application/json",
     data: json
    }).done(function(json) {
      Client.getLabels();
    }).fail(function() {
      console.error("Fail to save label");
      App.goto("/");
    });
  },
  deleteLabel: function(id) {
    $.ajax({
     method: "delete",
     url: "/labels",
     data: {id: id}
    }).done(function(json) {
      Client.getLabels();
    }).fail(function() {
      console.error("Fail to delete label: " + id);
      App.goto("/");
    });
  },

  // 
  // comments
  ////////////////////////////////////////
  getActivities: function() {
    $.ajax({
     method: "get",
     url: "/activities",
    }).done(function(json) {
      App.activities.set(json);
    }).fail(function() {
      console.error("Fail to get activities");
      App.goto("/");
    });
  },
  saveComment: function(comment) {
    comment.datetime = (new Date()).valueOf();
    var json = JSON.stringify(comment);
    $.ajax({
     method: "post",
     url: "/activities",
     contentType: "application/json",
     data: json
    }).done(function(json) {
      Client.getActivities();
    }).fail(function() {
      console.error("Fail to add comment");
      App.goto("/");
    });
  },
  saveAction: function(action) {
    action.datetime = (new Date()).valueOf();
    var json = JSON.stringify(action);
    $.ajax({
     method: "post",
     url: "/activities",
     contentType: "application/json",
     data: json
    }).done(function(json) {
      Client.getActivities();
    }).fail(function() {
      console.error("Fail to add action");
      App.goto("/");
    });
  },  
  deleteActivity: function(id) {
    $.ajax({
     method: "delete",
     url: "/activities",
     data: {id: id}
    }).done(function(json) {
      Client.getActivities();
    }).fail(function() {
      console.error("Fail to delete comments: " + id);
      App.goto("/");
    });
  },   
};
