this["JST"] = this["JST"] || {};

this["JST"]["form"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form method=\"post\" action=\"/todos\"><fieldset><div><label>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</label><input type=\"hidden\" name=\"id\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><input type=\"hidden\" name=\"completed\" value="
    + alias4(((helper = (helper = helpers.completed || (depth0 != null ? depth0.completed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"completed","hash":{},"data":data}) : helper)))
    + "><input type=\"text\" name=\"title\" value="
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "></div><div><label>Due Date</label><div class=\"three-columns\"><select name=\"day\" size=\"1\" value=\""
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data}) : helper)))
    + "\"><option value=\"\" disabled selected >Day</option> <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option></select><span>/</span><select name=\"month\" size=\"1\" value=\""
    + alias4(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data}) : helper)))
    + "\"><option value=\"\" disabled selected >Month</option><option value=\"1\">January</option><option value=\"2\">February</option><option value=\"3\">March</option><option value=\"4\">April</option><option value=\"5\">May</option><option value=\"6\">June</option><option value=\"7\">July</option><option value=\"8\">August</option><option value=\"9\">September</option><option value=\"10\">October</option><option value=\"11\">November</option><option value=\"12\">December</option></select><span>/</span><select name=\"year\" size=\"1\" value=\""
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + "\"> <option value=\"\" disabled selected >Year</option><option>2016</option><option>2017</option><option>2018</option><option>2019</option><option>2020</option><option>2021</option></select></div></div><div class=\"task-description\"><label>Description</label><textarea name=\"description\" cols=\"30\" rows=\"10\" placeholder=\"Description\" value=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\"></textarea></div><div><input type=\"submit\" value=\"Save\"><input type=\"button\" value=\"Mark As Complete\"></div></fieldset></form>";
},"useData":true});

this["JST"]["group"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"due-date\">"
    + alias4(((helper = (helper = helpers.due_date || (depth0 != null ? depth0.due_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due_date","hash":{},"data":data}) : helper)))
    + "</span><span class=\"badge\">"
    + alias4(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"columns\"><input type=\"checkbox\" id=\"sidebar-toggle\"/><label for=\"sidebar-toggle\" id=\"menu\"></label><div id=\"sidebar\"><section class=\"all\"><h1 class=\"group\">All Todos<span class=\"badge\"></span></h1><ul></ul></section><section class=\"completed\"><h1 class=\"group\">Completed<span class=\"badge\"></span></h1><ul></ul></section></div><div id=\"content\"><h2><span class=\"title\">All Todos</span><span class=\"badge active\"></span></h2><p class=\"add\"><a href=\"#\">Add new to do</a></p> <!--todos--><table><tbody id=\"todos\"></tbody></table><div id=\"modal_background\"></div><div id=\"modal_form\"></div></div></div>";
},"useData":true});

this["JST"]["todo"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td><label class=\"title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.due_date || (depth0 != null ? depth0.due_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due_date","hash":{},"data":data}) : helper)))
    + "</label></td><td><span class=\"delete\"></span></td>";
},"useData":true});