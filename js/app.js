/*=============================================
=                   TEMPLATING                =
= imports reusable elements like header/footer=
==============================================*/
$(function() {
  var includes = $("[data-include]");
  jQuery.each(includes, function() {
    var file = "assets/" + $(this).data("include") + ".html";
    $(this).load(file);
  });
});
/*=============================================*/

// $breadcrumb-divider: quote(">");
