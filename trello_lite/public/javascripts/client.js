var Client = {
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
};
