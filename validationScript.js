// JavaScript code for form validation
// Prevent form from submitting

// Retrieve the input field element
const inputField = document.getElementById('inputField');

// Add event listener to form submit
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate input value using regular expression
    const inputValue = inputField.value;
    const alphanumericRegex = /^[a-zA-Z0-9]+$/; // Regular expression for alphanumeric input

    if (alphanumericRegex.test(inputValue)) {
        // Display confirmation message upon successful validation and submission
        alert('Form submitted successfully!');
        this.reset(); // Reset the form
    } else {
        // Display error message for non-alphanumeric values
        alert('Input should contain only alphanumeric characters.');
    }
});