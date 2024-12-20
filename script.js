
// Get the buttons

const createBtn = document.getElementById('create-btn');


createBtn.addEventListener('click', () => {
    // Navigate to the create account page
    window.location.href = 'create-account.html';
});
// Get the explore button by its ID
const exploreButton = document.getElementById('explore-btn');

// Add a click event listener to the button
exploreButton.addEventListener('click', () => {
    // Redirect to index.html
    window.location.href = 'index.html';
});


