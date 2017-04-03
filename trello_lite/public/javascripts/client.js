var Client = {
  saveCard: function(card) {
    var json = JSON.stringify(card.toJSON());
    console.log(json)
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
};
