// internal_development.js

// Set parallax natural width and height to peceived scrolling depth.
function parallax() {
    $('.parallax-window').parallax({
        naturalWidth: 16,
        naturalHeight: 9
    });
}

$(document).ready(function () {
    parallax();
})
