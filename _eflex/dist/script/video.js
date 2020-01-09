// Toggle None Video Theater

function videoTheaterToggle(video) {
    $('.video-theater-toggle-' + video + ', .video-theater-toggle-link-' + video).click(function () {
        $('body').toggleClass('overflow-hidden');
        $('.video-theater-' + video).toggleClass('d-block');
    });
    $('.icon-x-sm').click(function () {
        $('body').removeClass('overflow-hidden');
        $('.video-theater-' + video).removeClass('d-block');
        $('video').each(function () {
            $(this).get(0).pause();
        });
    });
}


// List Videos Here
videoTheaterToggle('jem-preview');
videoTheaterToggle('demo-assembly-show-2019');