// Next Button
$( "#form-next-1" ).click(function() {
  $( "#form-prev-1, #form-next-2, .form .hs_what_to_demo, .form .hs_when_does_your_next_project_start" ).css( "display", "block" );
  $( "#form-next-1, .form .hs_firstname, .form .hs_lastname, .form .hs_email, .form .hs_phone, .form .hs_company, .form .hs_state, .form .hs_job_title_dropdown_select_, .form .hs_message" ).css( "display", "none" );
});

$( "#form-next-2" ).click(function() {
  $( "#form-prev-2, .form .hs_blog_default_hubspot_blog_subscription, .form .legal-consent-container, .form .hs-button.primary" ).css( "display", "block" );
  $( "#form-prev-1, #form-next-2, .form .hs_what_to_demo, .form .hs_when_does_your_next_project_start" ).css( "display", "none" );
  // Validation Alert
  $('.form form').on('submit', (e) => {
    if ($('.hs-error-msgs').length) {
      $('#hs-errors-validation-popup').css('display', 'block');
      $('#hs-errors-validation-popup #hs-errors-validation-x').click(function() {
        $('#hs-errors-validation-popup').css('display', 'none');
      });
      $('#hs-errors-validation-popup').delay(5000).fadeOut('slow');
    } else {
      $('#form-prev-2').css( "display", "none" );
    }
  });
});

if ($('.form form').has('.hs-error-msgs')) {
  $(this).children('.hs-form-field input').css('border-color', 'red');
}

// Prev Button
$( "#form-prev-1" ).click(function() {
  $( "#form-prev-1, #form-next-2, .form .hs_what_to_demo, .form .hs_when_does_your_next_project_start" ).css( "display", "none" );
  $( "#form-next-1, .form .hs_firstname, .form .hs_lastname, .form .hs_email, .form .hs_phone, .form .hs_company, .form .hs_state, .form .hs_job_title_dropdown_select_, .form .hs_message" ).css( "display", "block" );
});

$( "#form-prev-2" ).click(function() {
  $( "#form-prev-2, .form .hs_blog_default_hubspot_blog_subscription, .form .legal-consent-container, .form .hs-button.primary" ).css( "display", "none" );
  $( "#form-prev-1, #form-next-2, .form .hs_what_to_demo, .form .hs_when_does_your_next_project_start" ).css( "display", "block" );
});