
document.getElementById('submit-button').addEventListener('click', function() {
    var contactPageContent = document.getElementById('contact-page');
    // Clear existing content
    contactPageContent.innerHTML = '';
    // Create a new paragraph element
    var thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for your message';
    thankYouMessage.style.fontSize = '24px';
    // Append the new paragraph to the main content
    contactPageContent.appendChild(thankYouMessage);
});
