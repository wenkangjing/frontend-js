var Client = {
  // 
  // lists
  ////////////////////////////////////////  
  getLists: function() {
    $.ajax({
     method: "get",
     url: "/lists",
    }).done(function(json) {
      App.lists.set(json);
    }).fail(function() {
      console.error("Fail to get lists");
      App.goto("/");
    });
  },
  setLists: function(lists) {
    var json = JSON.stringify(lists);
    $.ajax({
     method: "put",
     url: "/lists",
     contentType: "application/json",
     data: json
    }).done(function(json) {
      console.log(json);
    }).fail(function() {
      console.error("Fail to set lists" );
      App.goto("/");
    });
  },
  saveList: function(list) {
    if (!list.id) {
      list.created = (new Date()).valueOf();
    }
    var json = JSON.stringify(list);
    $.ajax({
     method: "post",
     url: "/lists",
     contentType: "application/json",
     data: json
    }).done(function(json) {
      console.log(json);
    }).fail(function() {
      console.error("Fail to save list: " + list);
      App.goto("/");
    });
  },
  deleteList: function(id) {
    $.ajax({
     method: "delete",
     url: "/lists",
     data: {id: id}
    }).done(function(json) {
      console.log(json);
    }).fail(function() {
      console.error("Fail to delete list: " + id);
      App.goto("/");
    });
  },
  
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
  setCards: function(cards) {
    var json = JSON.stringify(cards);
    $.ajax({
     method: "put",
     url: "/cards",
     contentType: "application/json",
     data: json
    }).done(function(json) {
      console.log(json);
    }).fail(function() {
      console.error("Fail to set cards" );
      App.goto("/");
    });
  },  
  saveCard: function(card) {
    delete card.comments; // add in CardView for badge
    if (!card.id) { 
      card.created = (new Date()).valueOf();
    }
    var json = JSON.stringify(card);
    $.ajax({
     method: "post",
     url: "/cards",
     contentType: "application/json",
     data: json
    }).done(function(json) {
      console.log(json);
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
      console.log(json);
    }).fail(function() {
      console.error("Fail to delete card: " + id);
      App.goto("/");
    });
  },
  moveCard: function(idCard, idList) {
    var card = App.cards.get(idCard);
    card.set("idList", idList, {silent: true});
    Client.saveCard(card.toJSON());
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
    $.ajax({
     method: "post",
     url: "/labels",
     contentType: "application/json",
     data: json
    }).done(function(json) {
      console.log(json);
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
      console.log(json);
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
    if (!comment.id) {
      comment.created = (new Date()).valueOf();
    }
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
    if (!action.id) {
      action.created = (new Date()).valueOf();
    }
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
