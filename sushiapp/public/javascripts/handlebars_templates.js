this["JST"] = this["JST"] || {};

this["JST"]["menu_detail"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a class=\"prev\" href=\"#\"></a><img src=\"/images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"><div class=\"description\"><h3>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3><p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p><div><h3 class=\"price\">$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</h3><a class=\"add-to-cart\" href=\"#\"></a></div></div><div class=\"nutrition\"><h4>Nutritional Information</h4><ul><li>Protein<span>"
    + alias4(((helper = (helper = helpers.protein || (depth0 != null ? depth0.protein : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"protein","hash":{},"data":data}) : helper)))
    + "</span></li><li>Fat(total)<span>"
    + alias4(((helper = (helper = helpers.fat || (depth0 != null ? depth0.fat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fat","hash":{},"data":data}) : helper)))
    + "</span></li><li>Carbohydrate<span>"
    + alias4(((helper = (helper = helpers.carbohydrate || (depth0 != null ? depth0.carbohydrate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"carbohydrate","hash":{},"data":data}) : helper)))
    + "</span></li><li>Energy(kj)<span>"
    + alias4(((helper = (helper = helpers.energy || (depth0 != null ? depth0.energy : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"energy","hash":{},"data":data}) : helper)))
    + "</span></li><li>Energy(kcal)<span>"
    + alias4(((helper = (helper = helpers.energy || (depth0 != null ? depth0.energy : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"energy","hash":{},"data":data}) : helper)))
    + "</span></li><li>Sugar<span>"
    + alias4(((helper = (helper = helpers.sugar || (depth0 != null ? depth0.sugar : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sugar","hash":{},"data":data}) : helper)))
    + "</span></li></ul></div><a class=\"next\" href=\"#\"></a>";
},"useData":true});

this["JST"]["menu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"menu-item\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"info\"><img src=\"/images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"><div class=\"mask\"></div><h3>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3><p>$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p></div><a class=\"add-to-cart\" href=\""
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">add to cart</a></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});