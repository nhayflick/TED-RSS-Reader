(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['entryshow.tmpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#\" data-toggle=\"modal\" data-target=\"#show-";
  if (stack1 = helpers['i']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['i']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"tile-link\">\n<div class=\"entry-container\">\n<img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.thumbnail),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.entry),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n<div class=\"show-meta\">\n<h5>"
    + escapeExpression(((stack1 = ((stack1 = depth0.entry),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h5>\n"
    + escapeExpression(((stack1 = ((stack1 = depth0.entry),stack1 == null || stack1 === false ? stack1 : stack1.contentSnippet)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n<div>\n</div>\n</a>\n\n\n<div id=\"show-";
  if (stack2 = helpers['i']) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0['i']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"modal hide fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">X</button>\n    <h5>"
    + escapeExpression(((stack1 = ((stack1 = depth0.entry),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h5>  \n    Published: "
    + escapeExpression(((stack1 = ((stack1 = depth0.entry),stack1 == null || stack1 === false ? stack1 : stack1.publishedDate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <br>\n    Categories: <span class=\"label label-inverse\">";
  if (stack2 = helpers.category) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.category; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>  \n  </div>\n  <div class=\"modal-body\">\n    <video id=\"video-";
  if (stack2 = helpers['i']) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0['i']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"video-js vjs-default-skin\"\n      controls preload=\"auto\" width=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.thumbnail),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.thumbnail),stack1 == null || stack1 === false ? stack1 : stack1.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n      poster=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.thumbnail),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n      data-setup='{}'>\n     <source src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.videoContent),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type='video/mp4' />\n    </video>\n  </div>\n  <div class=\"modal-footer\">\n     ";
  stack2 = ((stack1 = ((stack1 = depth0.entry),stack1 == null || stack1 === false ? stack1 : stack1.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "<br>\n      <a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.entry),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"modal-footer-a\"> Original Link </a>\n   </div>\n</div>";
  return buffer;
  });
})();