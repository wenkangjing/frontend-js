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
    }).done(function(json) {
      var album = new Album(json);
      App.albms.set(album);
      App.router.navigate("", {trigger: true});
    });
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