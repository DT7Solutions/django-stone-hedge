jQuery(document).ready(function () {
    jQuery('#contactBtn').click(function (event) {
        event.preventDefault(); 

        // Collect form data
        let firstName = jQuery('#firstName').val();
        let lastName = jQuery('#lastName').val();
        let phone = jQuery('#phone').val();
        let email = jQuery('#email').val();
        let service = jQuery('#service').val();
        let message = jQuery('#message').val();
        let csrfmiddlewaretoken = jQuery('input[name=csrfmiddlewaretoken]').val();

        // Validate form fields
        if (!firstName || !lastName || !phone || !email || !service || !message) {
            jQuery('.error-message').show().text("All fields are required.");
            return;
        }

        jQuery('.error-message').hide(); // Hide any previous error messages

        // Prepare the data for submission
        let data = new FormData();
        data.append('firstName', firstName);
        data.append('lastName', lastName);
        data.append('phone', phone);
        data.append('email', email);
        data.append('service', service);
        data.append('message', message);
        data.append('csrfmiddlewaretoken', csrfmiddlewaretoken);

        // Display loading indicator
        jQuery('.loading').show();

        // AJAX request to submit the form
        jQuery.ajax({
            url: '/contact/', 
            type: 'POST',
            data: data,
            processData: false,
            contentType: false,
            success: function (response) {
                jQuery('.loading').hide();
                if (response.success) {
                    jQuery('#contactForm')[0].reset();
                    jQuery('.sent-message').show().text("Your message has been sent successfully!");
                } else {
                    jQuery('.error-message').show().text("Form submission failed. Please try again.");
                }
            },
            error: function () {
                jQuery('.loading').hide();
                jQuery('.error-message').show().text("An error occurred. Please try again later.");
            }
        });
    });
});
