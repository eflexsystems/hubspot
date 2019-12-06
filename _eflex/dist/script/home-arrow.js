$(".home-arrow").click(function() {
  $('html,body').animate({
    scrollTop: $(".home-arrow").offset().top},
    'slow');
});