$('.img-zoom-pan img').on('mouseover', function(){
  $(this).css({'transform': 'scale(1.5)', 'transition-duration': '0.5s'});
})

$('.img-zoom-pan img').on('mouseout', function(){
  $(this).css({'transform': 'scale(1)', 'transition-duration': '0.5s'});
})

$('.img-zoom-pan img').on('mousemove', function(e){
  $(this).css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%', 'transition-duration': '0s'});
})