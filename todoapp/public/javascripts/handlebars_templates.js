this["JST"] = this["JST"] || {};

this["JST"]["form"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<option value=\"0\">Day</option> <option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option><option value=\"11\">11</option><option value=\"12\">12</option><option value=\"13\">13</option><option value=\"14\">14</option><option value=\"15\">15</option><option value=\"16\">16</option><option value=\"17\">17</option><option value=\"18\">18</option><option value=\"19\">19</option><option value=\"20\">20</option><option value=\"21\">21</option><option value=\"22\">22</option><option value=\"23\">23</option><option value=\"24\">24</option><option value=\"25\">25</option><option value=\"26\">26</option><option value=\"27\">27</option><option value=\"28\">28</option><option value=\"29\">29</option><option value=\"30\">30</option><option value=\"31\">31</option>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<option value=\"0\">Month</option><option value=\"1\">January</option><option value=\"2\">February</option><option value=\"3\">March</option><option value=\"4\">April</option><option value=\"5\">May</option><option value=\"6\">June</option><option value=\"7\">July</option><option value=\"8\">August</option><option value=\"9\">September</option><option value=\"10\">October</option><option value=\"11\">November</option><option value=\"12\">December</option>";
},"5":function(container,depth0,helpers,partials,data) {
    return "<option value=\"0\">Year</option><option value=\"2016\">2016</option><option value=\"2017\">2017</option><option value=\"2018\">2018</option><option value=\"2019\">2019</option><option value=\"2020\">2020</option><option value=\"2021\">2021</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"modal_background\"></div><div id=\"modal_form\"><form method=\"post\" action=\"/todos\"><fieldset><div><label>Title</label><input type=\"hidden\" name=\"id\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><input type=\"hidden\" name=\"completed\" value=\""
    + alias4(((helper = (helper = helpers.completed || (depth0 != null ? depth0.completed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"completed","hash":{},"data":data}) : helper)))
    + "\"><input type=\"text\" name=\"title\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\"></div><div><label>Due Date</label><div class=\"three-columns\"><select name=\"day\" size=\"1\">"
    + ((stack1 = (helpers.select || (depth0 && depth0.select) || alias2).call(alias1,(depth0 != null ? depth0.day : depth0),{"name":"select","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><span>/</span><select name=\"month\" size=\"1\">"
    + ((stack1 = (helpers.select || (depth0 && depth0.select) || alias2).call(alias1,(depth0 != null ? depth0.month : depth0),{"name":"select","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><span>/</span><select name=\"year\" size=\"1\"> "
    + ((stack1 = (helpers.select || (depth0 && depth0.select) || alias2).call(alias1,(depth0 != null ? depth0.year : depth0),{"name":"select","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div></div><div class=\"task-description\"><label>Description</label><textarea name=\"description\" cols=\"30\" rows=\"10\" placeholder=\"Description\" value=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\"></textarea></div><div><input type=\"submit\" value=\"Save\"><input type=\"button\" value=\"Mark As Complete\"></div></fieldset></form></div>";
},"useData":true});

this["JST"]["groups"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"group "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><span class=\"due-date\">"
    + alias4(((helper = (helper = helpers.due_date || (depth0 != null ? depth0.due_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due_date","hash":{},"data":data}) : helper)))
    + "</span><span class=\"badge\">"
    + alias4(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data}) : helper)))
    + "</span></li>";
},"2":function(container,depth0,helpers,partials,data) {
    return " completed ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h1 class=\"group\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "<span class=\"badge\">"
    + alias4(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total","hash":{},"data":data}) : helper)))
    + "</span></h1><ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.groups : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"columns\"><input type=\"checkbox\" id=\"sidebar-toggle\"/><label for=\"sidebar-toggle\" id=\"menu\"></label><div id=\"sidebar\"></div><div id=\"content\"></div></div>";
},"useData":true});

this["JST"]["todos"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr class=\"todo "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><td><label class=\"title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.due_date || (depth0 != null ? depth0.due_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due_date","hash":{},"data":data}) : helper)))
    + "</label></td><td><span class=\"delete\"></span></td></tr>";
},"2":function(container,depth0,helpers,partials,data) {
    return " completed ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h2><span class=\"title\">"
    + alias4(((helper = (helper = helpers.content_title || (depth0 != null ? depth0.content_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content_title","hash":{},"data":data}) : helper)))
    + "</span><span class=\"badge active\">"
    + alias4(((helper = (helper = helpers.content_total || (depth0 != null ? depth0.content_total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content_total","hash":{},"data":data}) : helper)))
    + "</span></h2><p class=\"add\"><a href=\"#\">Add new to do</a></p> <div id=\"modal\"></div><table><tbody id=\"todos\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.todos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody></table>";
},"useData":true});