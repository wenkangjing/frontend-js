var Label = Backbone.Model.extend({
  initialize: function(){
    var colorName = this.get("color");
    if (colorName) {
      this.set("rgb", _(App.colors).findWhere({name: colorName}).color);
    }
  }
});