function toggleList(listId) {
    const hiddenList = document.getElementById(listId);
    
    // Toggle the display property of the targeted list
    if (hiddenList.style.display === 'none') {
        hiddenList.style.display = 'block';  // Show the list
    } else {
        hiddenList.style.display = 'none';   // Hide the list
    }
}


function saveFormDataAndRedirect() {
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        degree: document.getElementById('degree').value,
        yearOfPassing: document.getElementById('yearOfPassing').value,
        institution: document.getElementById('institution').value,
        jobTitle: document.getElementById('jobTitle').value,
        company: document.getElementById('company').value,
        yearsWorked: document.getElementById('yearsWorked').value,
        skills: document.getElementById('skills').value
    };

    // Save form data to localStorage
    localStorage.setItem('resumeData', JSON.stringify(formData));

    // Redirect to the resume page
    window.location.href = 'resume.html';
}