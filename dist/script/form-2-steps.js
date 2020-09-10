$('#form-prev-1, #form-prev-2, #form-next-2').css('display', 'none');

function form_twoSteps(formName, form_Group1, form_Group2) {
    // Next Button
    $(formName + " #form-next-1").click(function () {
        $(formName + " #form-next-1").css("display", "none");
        $(form_Group1).css("display", "none");
        $(formName + " #form-prev-2, " + formName + " .hs-button.primary").css("display", "block");
        $(form_Group2).css("display", "block");
        // Validation Alert
        $(formName + ' form').on('submit', (e) => {
            if ($(formName + ' .hs-error-msgs').length) {
                $(formName + ' #hs-errors-validation-popup').css('display', 'block');
                $(formName + ' #hs-errors-validation-popup #hs-errors-validation-x').click(function () {
                    $(formName + ' #hs-errors-validation-popup').fadeOut('slow');
                });
                setTimeout(function () {
                    $(formName + ' #hs-errors-validation-popup').fadeOut('slow');
                }, 2000);
            }
        });
    });

    // Prev Button
    $(formName + " #form-prev-2").click(function () {
        $(formName + " #form-prev-2," + formName + " .hs-button.primary").css("display", "none");
        $(form_Group2).css("display", "none");
        $(formName + " #form-next-1, .form .hs_firstname").css("display", "block");
        $(form_Group1).css("display", "block");
    });
};

var downloadRequest_Group1 = '.form .hs_firstname, .form .hs_lastname, .form .hs_email, .form .hs_phone, .form .hs_company, .form .hs_state, .form .hs_jobtitle';
var downloadRequest_Group2 = '.form .legal-consent-container';
form_twoSteps('#download_request', downloadRequest_Group1, downloadRequest_Group2);