$('#carousel-jem').slick({
    lazyLoad: 'ondemand',
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    slidersToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    responsive: [
        {
            breakpoint: 992, // bootstrap lg
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 3,
                infinite: true,
                autoplay: true,
                speed: 400
            }
        },
        {
            breakpoint: 576, // bootstrap sm
            settings: {
                arrows: true,
                centerMode: false,
                slidesToShow: 1,
                infinite: true,
                autoplay: true,
                speed: 400
            }
        }
    ]
});

const instance = basicLightbox.create(`
	<div>
		<video controls data-id="2">
		<source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4">
	</div>
`)

document.querySelector('button.btn-video').onclick = () => {
	instance.show();
}