var NewAlbumView = Backbone.View.extend({
  template: App.templates.new_album,
  attributes: {
    id: "album_new"
  },
  events: {
    "submit": "createOrUpdate",
  },
  createOrUpdate: function(e) {
    e.preventDefault();
    $f = this.$("form");
    $.ajax({
     method: $f.attr("method"),
     url: $f.attr("action"),
     data: $f.serializeArray(),
    }).done(function(json){
      var model = App.albums.get(json.id);
      if (model) {
        model.set({
          title:  json.title,
          artist: json.artist,
          date:   json.date,
          cover:  json.cover,
          price:  json.price,
        });
      } else {
        var model = new Album(json);
        App.albums.push(model);
      }
      App.goto("");
    }.bind(this.json));
  },
  render: function() {
    if(!!this.model) {
      this.$el.html(this.template(this.model.toJSON()));
    } else {
      this.$el.html(this.template());
    }
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});