// Show Dropdowns on Hover
var tabChange = function(){
  var tabs = $('.nav-tabs > a');
  var active = tabs.filter('.active');
  var next = active.next('a').length? active.next('a') : tabs.filter(':first-child');
  next.tab('show')
}

var tabCycle = setInterval(tabChange, 6000)

$(function(){
  $('.nav-tabs > a').mouseover(function(e) {
    $(this).tab('show');
    clearInterval(tabCycle);
  }).mouseout(function(){
    tabCycle = setInterval(tabChange, 6000);
  })
})

// Image Carousel - Multiple Slides
$('#carouselExample').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


// Remove Dropdown hover effects on mobile
function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
        if (!styleSheet.rules) continue;
        for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
          if (!styleSheet.rules[ri].selectorText) continue;
            if (styleSheet.rules[ri].selectorText.match('.dropdown:hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
  }
