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

    // Move classes to nested elements in hubspot modules.
    function hsWrapperChildAddClass(childClass) {
        jQuery(".hs_cos_wrapper." + childClass + " a").addClass(childClass);
        jQuery(".hs_cos_wrapper").removeClass(childClass);
    }

    let paddingClasses = ["p-0", 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'px-0', 'px-1', 'px-2', 'px-3', 'px-4', 'px-5', 'py-0', 'py-1', 'py-2', 'py-3', 'py-4', 'py-5'];
    let extraneousClasses = ["w-100", "h-100", "btn-lg", "btn-sm", "text-left", "text-capitalize"];

    let nestableClasses = paddingClasses.concat(extraneousClasses);
    nestableClasses.forEach(function (nestableClass) {
        hsWrapperChildAddClass(nestableClass);
    });

    // Responsive Images.. hsWrapperChildAddClass() doesn't work for image widget
    jQuery(".hs-image-widget").addClass("w-100");
});