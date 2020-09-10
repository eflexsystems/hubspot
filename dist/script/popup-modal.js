// Toggle Popup Modal

function modalToggle(num) {
    $('#image_link_' + num).click(function () {
        $('body').toggleClass('overflow-hidden');
        $('#image_link_block_' + num).toggleClass('d-block');
        $('.content').css('filter', 'blur(4px)');
    });
    $('#image_link_block_' + num + ' .icon-x-sm').click(function () {
        $('body').removeClass('overflow-hidden');
        $('#image_link_block_' + num).removeClass('d-block');
        $('.content').css('filter', 'none');
    });
}


// Function with a 'For Loop'
for (var n = 1; n < 12; ++n) {
    modalToggle('2_' + n);
}