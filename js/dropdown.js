$(function() {
  $('#dropdown-menu').hover(function() {
    $('.dropdown li').stop().slideDown();
  }, function() {
    $('.dropdown li').stop().slideUp();
  });
});