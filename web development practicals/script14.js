function validateForm(event) {
            event.preventDefault(); // Prevent form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (name === '') {
                alert('Name is required.');
                return false;
            }

            if (email === '' || !email.includes('@')) {
                alert('Please enter a valid email address.');
                return false;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return false;
            }

            alert('Form submitted successfully!');
            return true;
        }