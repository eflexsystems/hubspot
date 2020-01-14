$('#form-prev-1, #form-prev-2, #form-next-2').css('display', 'none');

function form_threeSteps(formName, form_Group1, form_Group2, form_Group3) {
  // Next Button
  $(formName + " #form-next-1").click(function () {
    $(formName + " #form-next-1").css("display", "none");
    $(form_Group1).css("display", "none");
    $(formName + " #form-prev-1, #form-next-2").css("display", "block");
    $(form_Group2).css("display", "block");
  });
  // Next 2 Button
  $(formName + " #form-next-2").click(function () {
    $(formName + " #form-prev-1, " + formName + " #form-next-2").css("display", "none");
    $(form_Group2).css("display", "none");
    $(formName + " #form-prev-2, " + formName + " .hs-button.primary").css("display", "block");
    $(form_Group3).css("display", "block");
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
  $(formName + " #form-prev-1").click(function () {
    $(formName + " #form-prev-1, " + formName + " #form-next-2").css("display", "none");
    $(form_Group2).css("display", "none");
    $(formName + " #form-next-1, .form .hs_firstname").css("display", "block");
    $(form_Group1).css("display", "block");
  });
  // Prev 2 Button
  $(formName + " #form-prev-2").click(function () {
    $(formName + " #form-prev-2, " + formName + " #form-next-1").css("display", "none");
    $(form_Group3).css("display", "none");
    $(formName + " #form-prev-1," + formName + " #form-next-2").css("display", "block");
    $(form_Group2).css("display", "block");
  });
};


var freeAssessment_Group1 = '.form .hs_firstname, .form .hs_lastname, .form .hs_email, .form .hs_phone, .form .hs_company, .form .hs_state, .form .hs_job_title_dropdown_select_, .form .hs_message'
var freeAssessment_Group2 = '.form .hs_what_to_demo, .form .hs_when_does_your_next_project_start';
var freeAssessment_Group3 = '.form .hs_blog_default_hubspot_blog_subscription, .form .legal-consent-container, .form .hs-button.primary';
form_threeSteps('#free_assessment', freeAssessment_Group1, freeAssessment_Group2, freeAssessment_Group3);

var freeDemo_Group1 = '.form .hs_firstname, .form .hs_lastname, .form .hs_email, .form .hs_phone, .form .hs_company, .form .hs_state, .form .hs_job_title_dropdown_select_, .form .hs_message'
var freeDemo_Group2 = '.form .hs_what_to_demo, .form .hs_when_does_your_next_project_start';
var freeDemo_Group3 = '.form .hs_blog_default_hubspot_blog_subscription, .form .legal-consent-container, .form .hs-button.primary';
form_threeSteps('#free_demo', freeDemo_Group1, freeDemo_Group2, freeDemo_Group3);