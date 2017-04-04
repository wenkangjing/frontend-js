var Client = {
  saveCard: function(card) {
    var json = JSON.stringify(card.toJSON());
    $.ajax({
     method: "post",
     url: "/cards",
     contentType: "application/json",
     data: json
    }).done(function(json) {
      console.log(json);
    }).fail(function() {
      console.error("Fail to save card: " + card.toJSON());
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
  getLabels: function() {
    $.ajax({
     method: "get",
     url: "/labels",
    }).done(function(json) {
      App.labels = new Labels(json);
    }).fail(function() {
      console.error("Fail to get labels: " + label.toJSON());
      App.goto("/");
    });
  },
  saveLabel: function(label) {
    var json = JSON.stringify(label.toJSON());
    console.log(json)
    $.ajax({
     method: "post",
     url: "/labels",
     contentType: "application/json",
     data: json
    }).done(function(json) {
      Client.getLabels();
    }).fail(function() {
      console.error("Fail to save label: " + label.toJSON());
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
};
