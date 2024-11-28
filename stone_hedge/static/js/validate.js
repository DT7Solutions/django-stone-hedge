(function () {
    "use strict";

    document.querySelectorAll('.pq-contact-form').forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            let firstName = form.querySelector("input[name='first-name']").value.trim();
            let lastName = form.querySelector("input[name='last-name']").value.trim();
            let email = form.querySelector("input[name='email']").value.trim();
            let phone = form.querySelector("input[name='phone']").value.trim();
            let service = form.querySelector("select").value;
            let message = form.querySelector("textarea[name='your-message']").value.trim();

            if (!firstName || !lastName || !email || !phone || !service || !message) {
                displayError(form, 'Please fill in all required fields.');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                displayError(form, 'Please enter a valid email address.');
                return;
            }

            if (!/^\+?\d{7,15}$/.test(phone)) {
                displayError(form, 'Please enter a valid phone number.');
                return;
            }

            form.querySelector('.loading').style.display = 'block';
            form.querySelector('.error-message').style.display = 'none';
            form.querySelector('.sent-message').style.display = 'none';

            sendMail(form);
        });
    });

    function sendMail(form) {
        let params = {
            firstName: form.querySelector("input[name='first-name']").value,
            lastName: form.querySelector("input[name='last-name']").value,
            email: form.querySelector("input[name='email']").value,
            phone: form.querySelector("input[name='phone']").value,
            service: form.querySelector("select").value,
            message: form.querySelector("textarea[name='your-message']").value,
        };

        emailjs.send("service_975uom8", "template_c8q6hgj", params).then(
            function (response) {
                console.log("Email sent successfully:", response);
                form.reset();

                form.querySelector('.loading').style.display = 'none';
                const sentMessageElement = form.querySelector('.sent-message');
                sentMessageElement.style.display = 'block';

                setTimeout(() => {
                    sentMessageElement.style.display = 'none';
                }, 5000);
            },
            function (error) {
                console.error("Email sending failed:", error);
                displayError(form, "There was an error while sending your message. Please try again later.");
                form.reset();
            }
        );
    }

    function displayError(form, error) {
        const errorMessageElement = form.querySelector('.error-message');
        form.querySelector('.loading').style.display = 'none';
        errorMessageElement.innerHTML = error;
        errorMessageElement.style.display = 'block';

        setTimeout(() => {
            errorMessageElement.style.display = 'none';
        }, 5000);
    }

})();
