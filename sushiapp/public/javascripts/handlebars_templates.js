this["JST"] = this["JST"] || {};

this["JST"]["cart_detail"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"cart-item\"><img src=\"/images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"/><div class=\"mask\"></div><p>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "<span class=\"op\">x</span>$"
    + alias4((helpers.toFixed || (depth0 && depth0.toFixed) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"toFixed","hash":{},"data":data}))
    + "</p></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><div> <p>Your </br>Shopping cart</p><h3>$ "
    + container.escapeExpression((helpers.toFixed || (depth0 && depth0.toFixed) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"toFixed","hash":{},"data":data}))
    + "</h3><div><a id=\"empty\" href=\"#\">Empty cart</a><span id=\"checkout\" class=\"angle-button\" href=\"#\">checkout</span></div></div>";
},"useData":true});

this["JST"]["cart_info"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\"#\">Shopping Cart<span class=\"angle-button\"><span>"
    + container.escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"count","hash":{},"data":data}) : helper)))
    + "</span> items</span></a>";
},"useData":true});

this["JST"]["menu_detail"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"badge\"><a class=\"prev\" href=\"#\"></a><img src=\"/images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"><div class=\"description\"><div><h3>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3><p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p></div><div><h3 class=\"price\">$"
    + alias4((helpers.toFixed || (depth0 && depth0.toFixed) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"toFixed","hash":{},"data":data}))
    + "</h3><a class=\"add-to-cart button\" href=\"#\">Add to cart</a></div></div><div class=\"nutrition\"><h4>Nutritional Information</h4><ul><li>Protein<span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.protein : stack1), depth0))
    + "</span></li><li>Fat(total)<span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.fat : stack1), depth0))
    + "</span></li><li>Carbohydrate<span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.carbohydrate : stack1), depth0))
    + "</span></li><li>Energy(kj)<span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.energy : stack1), depth0))
    + "</span></li><li>Energy(kcal)<span>"
    + alias4((helpers.toKcar || (depth0 && depth0.toKcar) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.energy : stack1),{"name":"toKcar","hash":{},"data":data}))
    + "</span></li><li>Sugar<span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.sugar : stack1), depth0))
    + "</span></li></ul></div><a class=\"next\" href=\"#\"></a></div>";
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