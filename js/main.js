/**
 * Main JavaScript for the coming soon page
 */
document.addEventListener('DOMContentLoaded', function() {
    // Update current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Newsletter subscription form
    const form = document.getElementById('notify-form');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;

            // Simple email validation
            if (!validateEmail(email)) {
                showMessage('Veuillez saisir une adresse e-mail valide', 'error');
                return;
            }

            // Simulate form submission
            showMessage('Envoi en cours...', '');

            // This would typically be an AJAX request to your backend
            setTimeout(function() {
                // Simulate successful subscription
                showMessage('Merci! Vous serez informé lors de notre lancement.', 'success');
                form.reset();
            }, 1500);
        });
    }

    /**
     * Display a message to the user
     */
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
    }

    /**
     * Validate email format
     */
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
