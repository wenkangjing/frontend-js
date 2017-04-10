this["JST"] = this["JST"] || {};

this["JST"]["card_composer"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<span class=\"label-sm\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" style=\"background:"
    + alias3((helpers.toRGB || (depth0 && depth0.toRGB) || alias2).call(alias1,(depth0 != null ? depth0.color : depth0),{"name":"toRGB","hash":{},"data":data}))
    + "\"></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"card-composer\"><div class=\"card-composer-wrapper clearfix\"><div class=\"labels\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><textarea class=\"card-composer-input\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</textarea></div><div class=\"card-composer-ops\"><input class=\"card-composer-confirm\" type=\"submit\" value=\"Add\"><a class=\"icon-lg icon-close dark-hover card-composer-cancel\" href=\"#\"></a><a class=\"icon-lg icon-overflow-menu-horizontal dark-background-hover card-composer-options\" href=\"#\"></a></div></div>";
},"useData":true});

this["JST"]["card_editor"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<span class=\"label-sm\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" style=\"background:"
    + alias3((helpers.toRGB || (depth0 && depth0.toRGB) || alias2).call(alias1,(depth0 != null ? depth0.color : depth0),{"name":"toRGB","hash":{},"data":data}))
    + "\"></span>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<div class=\"badge\"><span class=\"icon-sm icon-subscribe\"></span></div>";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"badge due "
    + alias3((helpers.isDuePast || (depth0 && depth0.isDuePast) || alias2).call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"isDuePast","hash":{},"data":data}))
    + "\"><span class=\"icon-sm icon-clock\"></span><span class=\"badge-text\">"
    + alias3((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</span></div>";
},"7":function(container,depth0,helpers,partials,data) {
    return "<div class=\"badge\"><span class=\"icon-sm icon-description\"></span></div>";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"badge\"><span class=\"icon-sm icon-comment\"></span><span class=\"badge-text\">"
    + container.escapeExpression(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"comments","hash":{},"data":data}) : helper)))
    + "</span></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"card-editor\"><span class=\"icon-lg icon-close card-editor-close-btn\"></span><div class=\"card-editor-body clearfix\"><div class=\"card-editor-main\"><div class=\"card-editor-wrapper\"><div class=\"labels\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><textarea class=\"card-editor-input\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</textarea><div class=\"card-editor-input-hiddendiv\"></div><div class=\"badges\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div><input class=\"card-editor-save\" type=\"submit\" value=\"Save\"></div><div class=\"card-editor-ops\"><a class=\"card-editor-btn-link card-editor-labels\" href=\"#\"><span class=\"icon-sm icon-label light\"></span><span>Edit Labels</span></a><a class=\"card-editor-btn-link card-editor-move\" href=\"#\"><span class=\"icon-sm icon-move light\"></span><span>Move</span></a><a class=\"card-editor-btn-link card-editor-copy\" href=\"#\"><span class=\"icon-sm icon-card light\"></span><span>Copy</span></a><a class=\"card-editor-btn-link card-editor-due-date\" href=\"#\"><span class=\"icon-sm icon-clock light\"></span><span>Change Due Date</span></a><a class=\"card-editor-btn-link card-editor-subscribe\" href=\"#\"><span class=\"icon-sm icon-subscribe light\"></span><span>Subscribe</span></a><a class=\"card-editor-btn-link card-editor-archive\" href=\"#\"><span class=\"icon-sm icon-archive light\"></span><span>Archive</span></a></div></div></div>";
},"useData":true});

this["JST"]["card_modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"icon-sm icon-subscribe\"></span>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"card-modal-label\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" style=\"background-color:"
    + alias4((helpers.toRGB || (depth0 && depth0.toRGB) || alias2).call(alias1,(depth0 != null ? depth0.color : depth0),{"name":"toRGB","hash":{},"data":data}))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"badges\"><h3>Due Date</h3><div class=\"due-date "
    + alias3((helpers.isDuePast || (depth0 && depth0.isDuePast) || alias2).call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"isDuePast","hash":{},"data":data}))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><span class=\"icon-sm icon-check due-date-complete-check\"></span><span class=\"badge-text\">"
    + alias3((helpers.formatDatetime || (depth0 && depth0.formatDatetime) || alias2).call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"formatDatetime","hash":{},"data":data}))
    + "</span></div></div>";
},"6":function(container,depth0,helpers,partials,data) {
    return "completed";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h3>Description</h3><a class=\"card-modal-edit-description\">Edit</a><p>"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>";
},"10":function(container,depth0,helpers,partials,data) {
    return "<a class=\"card-modal-create-description\"><span class=\"icon-sm icon-description\"></span>Edit the description...</a>";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"description","hash":{},"data":data}) : helper)));
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<li data-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span class=\"user-initials-sm indent\"></span>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comment : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + "</li>";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<p class=\"comment\">"
    + alias3(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</p><p class=\"comment-ops\"><a class=\"timestamp\">"
    + alias3((helpers.formatDatetime || (depth0 && depth0.formatDatetime) || alias2).call(alias1,(depth0 != null ? depth0.created : depth0),{"name":"formatDatetime","hash":{},"data":data}))
    + "</a><span class=\"card-modal-edit-comment\">Edit</span><span class=\"card-modal-delete-comment\">Delete</span></p>";
},"17":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<p class=\"action\">"
    + alias3(((helper = (helper = helpers.action || (depth0 != null ? depth0.action : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"action","hash":{},"data":data}) : helper)))
    + " at <a class=\"timestamp\">"
    + alias3((helpers.formatDatetime || (depth0 && depth0.formatDatetime) || alias2).call(alias1,(depth0 != null ? depth0.created : depth0),{"name":"formatDatetime","hash":{},"data":data}))
    + "</a></p>";
},"19":function(container,depth0,helpers,partials,data) {
    return " <span class=\"icon-sm icon-check light\"></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"overlay\"><div class=\"card-modal clearfix\"><header><h2><span class=\"icon-lg icon-card indent\"></span><div class=\"card-modal-title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><textarea class=\"card-modal-title-input\" spellcheck=\"false\" maxlength=\"512\" style=\"\"></textarea><div class=\"card-modal-title-input-hiddendiv\"></div></h2><p>in list <a href=\"#\">"
    + alias4(((helper = (helper = helpers.list || (depth0 != null ? depth0.list : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"list","hash":{},"data":data}) : helper)))
    + "</a> "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</p><a class=\"icon-lg icon-close dialog-close-btn\" href=\"#\"></a></header><main><section class=\"name\"><div class=\"labels\"><h3>Labels</h3><div>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<span class=\"card-modal-add-label dark-hover icon-lg icon-add\"></span></div></div>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"description\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "<form action=\"\"><textarea class=\"description-input\" name=\"description\" placeholder=\"Write a comment...\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</textarea><input class=\"card-modal-btn\" type=\"submit\" value=\"Save\"><a class=\"icon-lg icon-close description-close-btn\" href=\"#\"></a></form></div></section><section class=\"comment\"><h2><span class=\"icon-lg icon-comment indent\"></span><span>Add Comment</span></h2><form action=\"\"><span class=\"user-initials indent\"></span><textarea class=\"comment-input\" name=\"comment\" placeholder=\"Write a comment...\"></textarea><input class=\"card-modal-btn\" type=\"submit\" value=\"Send\"></form></section><section class=\"activity\"><h2><span class=\"icon-lg icon-activity indent\"></span><span>Activity</span></h2><ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.activities : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<li></li></ul></section></main><sidebar><section><h2>Add</h2><a class=\"card-modal-btn-link card-modal-labels\" href=\"#\"><span class=\"icon-sm icon-label\"></span>&nbsp;Labels</a><a class=\"card-modal-btn-link card-modal-due-date\" href=\"#\"><span class=\"icon-sm icon-clock\"></span>&nbsp;Due Date</a></section><section><h2>Actions</h2><a class=\"card-modal-btn-link card-modal-move\" href=\"#\"><span class=\"icon-sm icon-move\"></span>&nbsp;Move</a><a class=\"card-modal-btn-link card-modal-copy\" href=\"#\"><span class=\"icon-sm icon-card\"></span>&nbsp;Copy</a><a class=\"card-modal-btn-link card-modal-subscribe\" href=\"#\"><span class=\"icon-sm icon-subscribe\"></span>&nbsp;Subscribe"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a><a class=\"card-modal-btn-link card-modal-archive\" href=\"#\"><span class=\"icon-sm icon-archive\"></span>&nbsp;Archive</a></section></sidebar></div></div>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<span class=\"label-sm\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" style=\"background:"
    + alias3((helpers.toRGB || (depth0 && depth0.toRGB) || alias2).call(alias1,(depth0 != null ? depth0.color : depth0),{"name":"toRGB","hash":{},"data":data}))
    + "\"></span>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<div class=\"badge\"><span class=\"icon-sm icon-subscribe\"></span></div>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"badge due "
    + alias3((helpers.isDuePast || (depth0 && depth0.isDuePast) || alias2).call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"isDuePast","hash":{},"data":data}))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><span class=\"icon-sm icon-clock\"></span><span class=\"badge-text\">"
    + alias3((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</span></div>";
},"6":function(container,depth0,helpers,partials,data) {
    return "completed";
},"8":function(container,depth0,helpers,partials,data) {
    return "<div class=\"badge\"><span class=\"icon-sm icon-description\"></span></div>";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"badge\"><span class=\"icon-sm icon-comment\"></span><span class=\"badge-text\">"
    + container.escapeExpression(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"comments","hash":{},"data":data}) : helper)))
    + "</span></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"card-ops\"><a class=\"card-editor-btn icon-sm icon-edit dark-hover\" href=\"#\"></a></div><header><div class=\"labels\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></header><div class=\"name\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><div class=\"badges\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["JST"]["cardcopy_popover"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"pop-over card-copy-pop-over\"><div class=\"pop-over-header\"><span class=\"pop-over-header-title\">Copy Card</span><a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div class=\"pop-over-content\"><form><p><strong>Title</strong></p><textarea class=\"js-autofocus\" name=\"name\">"
    + alias4(((helper = (helper = helpers.cardName || (depth0 != null ? depth0.cardName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardName","hash":{},"data":data}) : helper)))
    + "</textarea><br><p><strong>Keep...</strong></p><div class=\"check-div u-clearfix\"><input id=\"idKeepLabels\" type=\"checkbox\" name=\"labels\" checked=\"checked\"><label for=\"idKeepLabels\">Labels<span>&nbsp;("
    + alias4(((helper = (helper = helpers.labelCount || (depth0 != null ? depth0.labelCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelCount","hash":{},"data":data}) : helper)))
    + ")</span></label></div><br><p><strong>Copy to...</strong></p><div class=\"button-link left\"><label>List</label><p class=\"list-value\"></p><select class=\"select-list\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div><div class=\"button-link right\"><label>Position</label><p class=\"position-value\"></p><select class=\"select-position\"></select></div><input class=\"card-copy-submit\" type=\"submit\" value=\"Create Card\"></form></div></div>";
},"useData":true});

this["JST"]["cardmove_popover"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<option>"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"index","hash":{},"data":data}) : helper)))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"pop-over card-move-pop-over\"><div class=\"pop-over-header\"><span class=\"pop-over-header-title\">Move Card</span><a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div class=\"pop-over-content\"><form action=\"\"><div class=\"button-link left\"><label>List</label><p class=\"list-value\"></p><select class=\"select-list\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div><div class=\"button-link right\"><label>Position</label><p class=\"position-value\"></p><select class=\"select-position\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div><input class=\"card-move-submit\" type=\"submit\" value=\"Move\"></form></div></div>";
},"useData":true});

this["JST"]["duedate_popover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop-over card-duedate-pop-over\"> <div class=\"pop-over-header\"><span class=\"pop-over-header-title\">Change Due Date</span><a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div class=\"pop-over-content\"><div><div class=\"card-duedate-date\"><h2>Date</h2><input type=\"text\" id=\"pika-datepicker\"></div><div class=\"card-duedate-time\"><h2>Time</h2><input type=\"text\" placeholder=\"Enter time...\" value=\"12:00\"></div></div><div id=\"pika-container\"></div><div><input class=\"card-modal-btn duedate-save\" type=\"submit\" value=\"Save\"><input class=\"card-modal-btn duedate-remove\" type=\"reset\" value=\"Remove\"></div></div></div>";
},"useData":true});

this["JST"]["labeldelete_popover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop-over card-label-delete-pop-over\"> <div class=\"pop-over-header\"><a href=\"#\" class=\"pop-over-header-back-btn icon-sm icon-back\"></a><span class=\"pop-over-header-title\">Delete Label?</span><a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div class=\"pop-over-content\"><p>There is no undo. This will remove this label from all cards and destroy its history.</p><div><input class=\"card-modal-btn label-delete-confirm\" type=\"reset\" value=\"Delete\"></div></div></div>";
},"useData":true});

this["JST"]["labeledit_popover"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"pop-over-header-title\">Create Label</span>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<span class=\"pop-over-header-title\">Change Label</span>";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"label-edit-color-btn\" data-color=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" style=\"background:"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\"><span class=\"icon-sm icon-check\"></span></span>";
},"7":function(container,depth0,helpers,partials,data) {
    return "Create";
},"9":function(container,depth0,helpers,partials,data) {
    return "Save";
},"11":function(container,depth0,helpers,partials,data) {
    return "<input class=\"card-modal-btn label-edit-delete\" type=\"reset\" value=\"Delete\">";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"pop-over card-label-edit-pop-over\"> <div class=\"pop-over-header\"><a href=\"#\" class=\"pop-over-header-back-btn icon-sm icon-back\"></a>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["new"] : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div class=\"pop-over-content\"><h2>Name</h2><input class=\"card-label-name\" type=\"text\" autocomplete=\"off\"><h2>Select a color</h2><div class=\"card-label-color-list\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"nocolor-notes\"><p>No Color.</p><p>This won't show up on the front of cards</p></div><div><input class=\"card-modal-btn label-edit-save\" type=\"submit\" value=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["new"] : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0["new"] : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div></div>";
},"useData":true});

this["JST"]["labels_popover"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a class=\"card-label-edit-btn icon-sm icon-edit\" href=\"#\"></a><span class=\"card-label "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" style=\"background:"
    + alias4((helpers.toRGB || (depth0 && depth0.toRGB) || alias2).call(alias1,(depth0 != null ? depth0.color : depth0),{"name":"toRGB","hash":{},"data":data}))
    + ";\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "<span class=\"icon-sm icon-check\"></span></span></li>";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"pop-over card-label-pop-over\"> <div class=\"pop-over-header\"><span class=\"pop-over-header-title\">Labels</span><a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div class=\"pop-over-content\"><input class=\"card-label-search\" type=\"text\" placeholder=\"Search labels…\" value=\"\" autocomplete=\"off\"><ul class=\"card-label-list\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><a class=\"card-label-add\" href=\"#\">Create a new label</a></div></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"icon-sm icon-subscribe\"></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<header><h2 class=\"list-name-text\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2><textarea class=\"list-name-input\" spellcheck=\"false\" maxlength=\"512\" style=\"\"></textarea><div class=\"list-name-input-hiddendiv\"></div><div class=\"list-ops\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<a href=\"#\" class=\"list-btn icon-sm dark-hover icon-overflow-menu-horizontal open-list-actions\"></a></div></header><div class=\"cards\"></div><a href=\"#\" class=\"list-btn dark-hover open-card-composer\">Add a card...</a>";
},"useData":true});

this["JST"]["listactions_popover"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"icon-sm icon-check\"></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"pop-over list-actions-pop-over\"> <div class=\"pop-over-header\"><span class=\"pop-over-header-title\">List Actions</span><a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div class=\"pop-over-content\"><ul class=\"actions\"><li><a class=\"list-actions-add-card\" href=\"#\">Add Card...</a></li><li><a class=\"list-actions-copy-list\" href=\"#\">Copy List...</a></li><li><a class=\"list-actions-move-list\" href=\"#\">Move List...</a></li><li><a class=\"highlight-icon list-actions-subscribe\" href=\"#\">Subscribe&nbsp;"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a></li></ul><hr><ul class=\"actions\"><li><a class=\"list-actions-move-cards\" href=\"#\">Move All Cards in This List...</a></li><li><a class=\"list-actions-archive-cards\" href=\"#\">Archive All Cards in This List...</a></li></ul><hr><ul class=\"actions\"><li><a class=\"list-actions-archive-list\" href=\"#\">Archive This List</a></li></ul></div></div>";
},"useData":true});

this["JST"]["listadd_popover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop-over list-add-pop-over\"><div class=\"pop-over-header\"><span class=\"pop-over-header-title\">Add List</span><a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div class=\"pop-over-content\"><form><div class=\"list-name left\"><p><strong>Name</strong></p><input type=\"text\" name=\"name\" value=\"List\"></div><div class=\"button-link right\"><label>Position</label><p class=\"position-value\"></p><select class=\"select-position\"></select></div><input class=\"list-add-submit\" type=\"submit\" value=\"Add\"></form></div></div>";
},"useData":true});

this["JST"]["menu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<li data-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span class=\"user-initials-sm indent\"></span>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comment : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</li>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<p class=\"comment\">"
    + alias3(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</p><p class=\"comment-ops\"><a class=\"timestamp\">"
    + alias3((helpers.formatDatetime || (depth0 && depth0.formatDatetime) || alias2).call(alias1,(depth0 != null ? depth0.created : depth0),{"name":"formatDatetime","hash":{},"data":data}))
    + "</a></p>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<p class=\"action\">"
    + alias3(((helper = (helper = helpers.action || (depth0 != null ? depth0.action : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"action","hash":{},"data":data}) : helper)))
    + " at <a class=\"timestamp\">"
    + alias3((helpers.formatDatetime || (depth0 && depth0.formatDatetime) || alias2).call(alias1,(depth0 != null ? depth0.created : depth0),{"name":"formatDatetime","hash":{},"data":data}))
    + "</a></p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"board-menu\"><div class=\"board-menu-header\"><h3 class=\"board-menu-header-title\">Menu</h3><a class=\"board-menu-header-close-button icon-lg icon-close\" href=\"#\"></a><hr></div><div class=\"board-menu-content\"><ul class=\"board-menu-navigation\"><li class=\"board-menu-navigation-item\"><span class=\"icon-sm icon-gear board-menu-navigation-item-link-icon\"></span>&nbsp;Settings</li><li class=\"board-menu-navigation-item\"><span class=\"icon-sm icon-label board-menu-navigation-item-link-icon\"></span>&nbsp;Labels</li><li class=\"board-menu-navigation-item\"><span class=\"icon-sm icon-archive board-menu-navigation-item-link-icon\"></span>&nbsp;Archived Items</li></ul><hr class\"section-divider\"><div class=\"board-menu-activities\"><h2><span class=\"icon-lg icon-activity indent\"></span><span>Activity</span></h2><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.activities : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></div></div>";
},"useData":true});

this["JST"]["notification"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<li data-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span class=\"user-initials-sm indent\"></span>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comment : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</li>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<p class=\"comment\">"
    + alias3(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</p><p class=\"comment-ops\"><a class=\"timestamp\">"
    + alias3((helpers.formatDatetime || (depth0 && depth0.formatDatetime) || alias2).call(alias1,(depth0 != null ? depth0.created : depth0),{"name":"formatDatetime","hash":{},"data":data}))
    + "</a></p>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<p class=\"action\">"
    + alias3(((helper = (helper = helpers.action || (depth0 != null ? depth0.action : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"action","hash":{},"data":data}) : helper)))
    + " at <a class=\"timestamp\">"
    + alias3((helpers.formatDatetime || (depth0 && depth0.formatDatetime) || alias2).call(alias1,(depth0 != null ? depth0.created : depth0),{"name":"formatDatetime","hash":{},"data":data}))
    + "</a></p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"notification\"><div class=\"notification-header\"><h3 class=\"notification-header-title\">Notification</h3><a class=\"notification-header-close-button icon-lg icon-close\" href=\"#\"></a><hr></div><div class=\"notification-content\"><div class=\"notification-activities\"><h2><span class=\"icon-lg icon-activity indent\"></span><span>Activity</span></h2><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.activities : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></div></div></div>";
},"useData":true});

this["JST"]["search_bar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"search-bar\"><input class=\"search-input\" type=\"text\"><div class=\"float-right\"><span class=\"search-start icon-search icon-lg light\"></span><span class=\"search-close icon-lg icon-close light\"></span></div></div>";
},"useData":true});

this["JST"]["search_result"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><div class=\"card-thumbnail\"><header><div class=\"labels\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></header><div class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div></div><div class=\"card-description\"><h3>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3><p>in <spam>"
    + alias4(((helper = (helper = helpers.listName || (depth0 != null ? depth0.listName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listName","hash":{},"data":data}) : helper)))
    + "</spam>"
    + alias4(((helper = (helper = helpers.listName || (depth0 != null ? depth0.listName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listName","hash":{},"data":data}) : helper)))
    + " on <span>Trello Lite</span></p></div></li>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<span class=\"label-sm\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" style=\"background:"
    + alias3((helpers.toRGB || (depth0 && depth0.toRGB) || alias2).call(alias1,(depth0 != null ? depth0.color : depth0),{"name":"toRGB","hash":{},"data":data}))
    + "\"></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"search-result\"><h2>Cards</h2><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></div>";
},"useData":true});