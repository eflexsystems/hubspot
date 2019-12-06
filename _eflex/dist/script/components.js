// Tab Card Active
$(function(){
  $('.tab-card').click(function(e) {
    $(this).toggleClass('active');
  })
})

// Brightness Toggle
$(function(){
  $('.brightness-toggle').click(function(e) {
    $('.flex-fill').toggleClass('bg-black');
    $('.font-italic').toggleClass('text-gray-light');
  })
})