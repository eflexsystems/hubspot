$('#carousel-demoRequest').slick({
    lazyLoad: 'ondemand',
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    slidersToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 800,
	autoplaySpeed: 10000,
    responsive: [
        {
            breakpoint: 992, // bootstrap lg
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 1,
                infinite: true,
                autoplay: true,
                speed: 800,
				autoplaySpeed: 10000,
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
                speed: 800,
				autoplaySpeed: 10000,
            }
        }
    ]
});