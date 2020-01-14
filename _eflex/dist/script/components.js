// Tab Card Active
$(function () {
  $('.tab-card').click(function (e) {
    $(this).toggleClass('active');
  })
})

// Brightness Toggle
$(function () {
  $('.brightness-toggle').click(function (e) {
    $('.flex-fill').toggleClass('bg-black');
    $('.font-italic').toggleClass('text-gray-light');
  })
})

// Brightness Toggle
function colorToggle(color) {
  $('#color-toggle-' + color).click(function () {
    $('.blend-overlay-red, .blend-overlay-orange, .blend-overlay-yellow, .blend-overlay-teal, .blend-overlay-green, .blend-overlay-cyan, .blend-overlay-blue, .blend-overlay-purple').removeClass('blend-overlay-red blend-overlay-orange blend-overlay-yellow blend-overlay-teal blend-overlay-green blend-overlay-cyan blend-overlay-blue blend-overlay-purple').addClass('blend-overlay-' + color);
    $('.text-red, .text-orange, .text-yellow, .text-teal, .text-green, .text-cyan, .text-blue, .text-purple').removeClass('text-red text-orange text-yellow text-teal text-green text-cyan text-blue text-purple').addClass('text-' + color);
  });
}

$('document').ready(function () {
  colorToggle('red');
  colorToggle('orange');
  colorToggle('yellow');
  colorToggle('teal');
  colorToggle('green');
  colorToggle('cyan');
  colorToggle('blue');
  colorToggle('purple');
});