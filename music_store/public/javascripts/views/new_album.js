var NewAlbumView = Backbone.View.extend({
  template: App.templates.new_album,
  attributes: {
    id: "album_new"
  },
  events: {
    "submit": "create",
  },
  create: function(e) {
    e.preventDefault();
    $f = this.$("form");
    $.ajax({
     method: $f.attr("method"),
     url: $f.attr("action"),
     data: $f.serializeArray(),
    }).done(function(json) {
      App.albums.add(json);
      history.back();
    });
  },
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});