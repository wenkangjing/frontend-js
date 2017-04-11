var Card  = Backbone.Model.extend({
  defaults: {
    idLabels: []
  },
  getListName: function() {
    var idList = this.get("idList");
    var list = App.lists.get(idList);
    if (list) {
      return list.get("name");
    } else {
      return "not found";
    }
  },
});