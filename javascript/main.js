$(document).ready(function (){
    var $header = $("header");
    $( window ).resize(function() {
      if ($header.width() < 770){
        $("nav").addClass('mobile');
      } else {
        $("nav").removeClass('mobile');
      }
    });
});

function dropDownNav(){
    var $nav = $("nav");
    var $navIcon = $('.nav-icon');

    if ($nav.hasClass("clicked")){
        $nav.removeClass("clicked");
    } else {
        $nav.addClass("clicked");
    }
}
