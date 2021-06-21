const debounce = (fn) => {
    let frame;
    return (...params) => {
        if (frame) {
            cancelAnimationFrame(frame);
        }

        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    }
};

//- Set data-scroll attribute to html tag
const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();

// Toggle Click for bootstrap navbar
function toggleDropdown(e) {
    const _d = $(e.target).closest('.dropdown'),
        _m = $('.dropdown-menu', _d);
    setTimeout(function () {
        //- Toggle Click on hover
        const shouldOpen = e.type !== 'click' && _d.is(':hover');
        _m.toggleClass('show', shouldOpen);
        _d.toggleClass('show', shouldOpen);
        $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 100 : 0); //- timeout if mouseout
}

//- Call toggleDropdown() for these events
function toggleNavbarMethod() {
    $('body')
        .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
        .on('click', '.dropdown-menu a', toggleDropdown);
}

//- Override navbar-dark less than lg.
function overrideNavbarStyle() {
    if (scrollResponsiveHeader) {
        if ($(window).width() > 992) {
            $('#header').addClass('header-interactive');
        } else {
            $('#header').removeClass('header-interactive');
        }
    }
}

//- Prevent Body Scroll If Navbar Show (Mobile)
function navbarCollapseShow() {
    $('.navbar-toggler').click(function (e) {
        $('body').toggleClass('position-fixed');
        console.log('collapsed');
    });
}

$(document).ready(function () {

    if ($(window).width() > 768) {
        toggleNavbarMethod();
    }

    navbarCollapseShow();

    overrideNavbarStyle();

});

// 
window.addEventListener('resize', function (event) {

    overrideNavbarStyle();
});