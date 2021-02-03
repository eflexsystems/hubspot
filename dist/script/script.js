jQuery(window).load(function () {

    console.log('Document Ready.');

    // Fade overlay once window is loaded.
    $("#loadingOverlay").fadeOut(400);

    // Swap hubspot styles with Bootstrap.
    jQuery("style").remove();
    jQuery("[id^=cta_button]").addClass("btn");

    let variants = ["primary", "secondary", "success", "warning", "danger", "info", "light", "dark", "link", "white", "flat"];
    variants.forEach(function (variant) {
        jQuery("." + variant + " a").addClass("btn-" + variant);
        jQuery(".outline-" + variant + " a").addClass("btn-outline-" + variant);
    });

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
                    console.log(ancestorClass);
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