$(document).ready(function () {
    $('#submitBtn').click(function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
       debugger
        // Collect form data
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let phone = $('#phone').val();
        let email = $('#email').val();
        let service = $('#service').val();
        let message = $('#message').val();
        let csrfmiddlewaretoken = $('input[name=csrfmiddlewaretoken]').val();

        // Validate form fields
        if (!firstName || !lastName || !phone || !email || !service || !message) {
            $('.error-message').show().text("All fields are required.");
            return;
        }

        $('.error-message').hide(); // Hide any previous error messages

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
        $('.loading').show();

        // AJAX request to submit the form
        $.ajax({
            type: 'POST',
            url: '/contact/', // Replace with your backend form submission endpoint
            processData: false,
            contentType: false,
            cache: false,
            data: data,
            success: function (response) {
                $('.loading').hide();
                if (response.success) {
                    $('#contactForm')[0].reset();
                    $('.sent-message').show().text("Your message has been sent successfully!");
                } else {
                    $('.error-message').show().text("Form submission failed. Please try again.");
                }
            },
            error: function () {
                $('.loading').hide();
                $('.error-message').show().text("An error occurred. Please try again later.");
            }
        });
    });
});
