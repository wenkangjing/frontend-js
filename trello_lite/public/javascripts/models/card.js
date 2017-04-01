var Card  = Backbone.Model.extend({
  initialize: function() {
    var labels = [];
    // transform label id to color and name
    var idLabels = this.get("idLabels") || [];
    idLabels.forEach(function(id) {
      var label = _(App.labels).findWhere({id: id});
      labels.push(label);
    });
    this.set("labels", labels);
  }
});