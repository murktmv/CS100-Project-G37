const config = {
  backendUrl: "http://localhost:8000/", // Default backend URL
};
const port = 8000;

document.addEventListener("DOMContentLoaded", function () {
    // Define the input variables
    const fullnameInput = document.getElementById("fullname");
    const studentIDInput = document.getElementById("studentID");
    const emailInput = document.getElementById("email");
    const workTitleInput = document.getElementById("workTitle");
    const activityTypeInput = document.getElementById("activityType");
    const academicYearInput = document.getElementById("academicYear");
    const semesterInput = document.getElementById("semester");
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const locationInput = document.getElementById("location");
    const descriptionInput = document.getElementById("description");
  
    const myForm = document.getElementById("myForm");
    const displayArea = document.getElementById("displayArea");
    const errorDiv = document.getElementById("error");

    // Function to validate Firstname and Lastname
  function validateName() {
    const fullnameInput = document.getElementById("fullname");
    const names = fullnameInput.value.trim().split(" ");
    const errorElement = document.getElementById("fullnameError");

    if (names.length !== 2) {
      errorElement.textContent = "Please enter both your Firstname and Lastname.";
      return false;
    } else {
      errorElement.textContent = ""; // Clear the error message when valid
    }
    return true;
  }

  // Function to validate Student ID
  function validateStudentID() {
    const studentIDInput = document.getElementById("studentID");
    const studentIDPattern = /^\d{10}$/;
    const errorElement = document.getElementById("studentIDError");

    if (!studentIDPattern.test(studentIDInput.value)) {
      errorElement.textContent = "Please enter a 10-digit Student ID.";
      return false;
    } else {
      errorElement.textContent = ""; // Clear the error message when valid
    }
    return true;
  }

  // Function to validate University Email
  function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailPattern = /^.+@dome\.tu\.ac\.th$/;
    const errorElement = document.getElementById("emailError");

    if (!emailPattern.test(emailInput.value)) {
      errorElement.textContent =
        "Please provide a valid university email in the format 'xxx.yyy@dome.tu.ac.th'.";
      return false;
    } else {
      errorElement.textContent = ""; // Clear the error message when valid
    }
    return true;
  }

  document.getElementById("fullname").addEventListener("input", validateName);
  document
    .getElementById("studentID")
    .addEventListener("input", validateStudentID);
  document.getElementById("email").addEventListener("input", validateEmail);

  // Function to display validation message for a specific field
  function displayValidationMessage(input, errorElement) {
    if (!input.checkValidity()) {
      errorElement.textContent = input.validationMessage;
    } else {
      errorElement.textContent = "";
    }
  }

  // Function to display validation messages
  function displayValidationMessages() {
    displayValidationMessage(fullnameInput, document.getElementById("fullnameError"));
    displayValidationMessage(studentIDInput, document.getElementById("studentIDError"));
    displayValidationMessage(emailInput, document.getElementById("emailError"));
    // Add other fields as needed
  }

  
  
  // Function to submit the form
  function submitForm(event) {
    event.preventDefault();

    // Validate the form
    if (validateStudentID() && validateEmail() && validateName()) {
      
      const data = {
        first_name: fullnameInput.value.split(" ")[0],
        last_name: fullnameInput.value.split(" ")[1],
        student_id: studentIDInput.value,
        email: emailInput.value,
        title: workTitleInput.value,
        type_of_work_id: activityTypeInput.value,
        academic_year: academicYearInput.value,
        semester: semesterInput.value,
        start_date: startDateInput.value,
        end_date: endDateInput.value,
        location: locationInput.value,
        description: descriptionInput.value
      };
  
      // Format data for display
      const formattedData = Object.entries(data)
        .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
        .join("<br>");
  
      // Append formatted data to the display area
      displayArea.innerHTML += formattedData + "<hr>"; // Use <hr> for separation
      errorDiv.textContent = ""; // Clear previous error messages
  
      // Reset the form after submission
      myForm.reset();
  
      console.log(data);

    }
    else { 
        displayValidationMessages();
      errorDiv.textContent = "Please fill in all required fields.";
      return;
    }
 }
 
  // Attach a submit event listener to the form
  myForm.addEventListener("submit", submitForm);

});