var AlbumView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.album,
  events: {
    "click a.add_to_cart": "addToCart",
    "click a.edit": "edit",
    "click a.delete": "delete",
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger("add_to_cart", this.model);
  },
  edit: function(e) {
    e.preventDefault();
    var id = +$(e.target).closest("li").attr("id").slice(6);
    App.goto(`albums/edit/${id}`);
  },
  delete: function(e) {
    e.preventDefault();
    var id = this.model.get("id");
    if (confirm("Are you sure to delete the ablum?")) {
      $.ajax({
        method: "delete",
        url: "/albums",
        data: {
          id: this.model.get("id")
        }
      }).done(function() {
        var id = this.model.id;
        var model = App.albums.get(id);
        App.albums.remove(model);
        App.trigger("remove_from_cart", id);
        App.indexView();
      }.bind(this));
    }
  },
  render: function() {
    var id = this.model.get('id');
    this.$el.attr("id", "album_" + id);
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find("ul"));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});
