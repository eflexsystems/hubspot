jQuery(window).load(function () {

    console.log('Document Ready.');

    $("#loadingOverlay").fadeOut(400);

    // Swap hubspot styles with Bootstrap.
    jQuery("style").remove();
    jQuery("[id^=cta_button]").addClass("btn");

    let variants = ["primary", "secondary", "success", "warning", "danger", "info", "light", "dark", "link", "white"];
    variants.forEach(function (variant) {
        jQuery("." + variant + " a").addClass("btn-" + variant);
        jQuery(".outline-" + variant + " a").addClass("btn-outline-" + variant);
    });

    // Move classes to nested elements in hubspot modules.
    function hsWrapperChildAddClass(childClass) {
        jQuery(".hs_cos_wrapper." + childClass + " a").addClass(childClass);
        jQuery(".hs_cos_wrapper").removeClass(childClass);
    }

    let nestableClasses = ["w-100", "btn-lg", "btn-sm"];
    nestableClasses.forEach(function (nestableClass) {
        hsWrapperChildAddClass(nestableClass);
    });
});