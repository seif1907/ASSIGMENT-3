document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const age = document.getElementById('age');

    let isValid = true;

    function clearError(input, errorSpan) {
        input.classList.remove('invalid');
        errorSpan.textContent = '';
    }

    function setError(input, errorSpan, message) {
        input.classList.add('invalid');
        errorSpan.textContent = message;
        isValid = false;
    }

    const nameError = document.getElementById('nameError');
    clearError(name, nameError);
    if (name.value.trim() === '') {
        setError(name, nameError, 'Name is required.');
    }

    const emailError = document.getElementById('emailError');
    clearError(email, emailError);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        setError(email, emailError, 'Email is required.');
    } else if (!emailPattern.test(email.value.trim())) {
        setError(email, emailError, 'Please enter a valid email address.');
    }

    const passwordError = document.getElementById('passwordError');
    clearError(password, passwordError);
    if (password.value === '') {
        setError(password, passwordError, 'Password is required.');
    } else if (password.value.length < 8) {
        setError(password, passwordError, 'Password must be at least 8 characters.');
    }

    const confirmPasswordError = document.getElementById('confirmPasswordError');
    clearError(confirmPassword, confirmPasswordError);
    if (confirmPassword.value === '') {
        setError(confirmPassword, confirmPasswordError, 'Please confirm your password.');
    } else if (confirmPassword.value !== password.value) {
        setError(confirmPassword, confirmPasswordError, 'Passwords do not match.');
    }

    const ageError = document.getElementById('ageError');
    clearError(age, ageError);
    if (age.value === '') {
        setError(age, ageError, 'Age is required.');
    } else if (Number(age.value) <= 0) {
        setError(age, ageError, 'Please enter a valid age.');
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
