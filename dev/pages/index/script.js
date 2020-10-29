$('#carousel-spotlight').slick({
    slidesToShow: 1,
    slidersToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
});

$('#carousel-clients').slick({
    lazyLoad: 'ondemand',
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    slidersToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    responsive: [
        {
            breakpoint: 992, // bootstrap lg
            settings: {
                arrows: false,
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
                arrows: false,
                centerMode: false,
                slidesToShow: 1,
                infinite: true,
                autoplay: true,
                speed: 400
            }
        }
    ]
});