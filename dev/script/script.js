// global script.js

jQuery(window).load(function () {

    // Fade overlay once window is loaded.
    $("#loadingOverlay").fadeOut(400);

    // Swap hubspot styles with Bootstrap.
    jQuery("style").remove();
    jQuery("[id^=cta_button]").addClass("btn");

    // Pass hs module classes to children
    function hsChildInheritClass(selector) {
        const hsExcludedClasses = ['hs_cos_wrapper', 'hs_cos_wrapper_widget', 'hs_cos_wrapper_type_cta', 'hs_cos_wrapper_type_raw_html', 'hs_ancestor'];

        const ancestorElements = document.getElementsByClassName('hs_ancestor ' + selector);
        for (var i = 0; i < ancestorElements.length; i++) {
            const ancestorClasses = ancestorElements[i].classList;
            for (var j = 0; j < ancestorClasses.length; j++) {
                const ancestorClass = ancestorClasses[j];

                if (hsExcludedClasses.includes(ancestorClass)) { }
                else {
                    jQuery('.' + selector + '.hs_ancestor.' + ancestorClass + ' a').addClass(ancestorClass);
                    jQuery('.' + selector + '.hs_ancestor.' + ancestorClass).removeClass(ancestorClass);
                }
            }
        }
    };

    // Select cta modules
    hsChildInheritClass('hs_cos_wrapper_type_cta');

    // Responsive Images.. hsWrapperChildAddClass() doesn't work for image widget
    jQuery(".hs-image-widget").addClass("w-100");
});

let scrollResponsiveHeader;