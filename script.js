const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', (e) => {
  const nameInput = document.getElementById('name');
  const portfolioInput = document.getElementById('portfolio');
  const favColorInput = document.getElementById('favColor');
  const likenessInput = document.getElementById('likeness');

  // Basic front-end checks
  if (!nameInput.value || nameInput.value.length < 3) {
    alert('Name must be at least 3 characters.');
    e.preventDefault();
    return;
  }

  if (!portfolioInput.value) {
    alert('Please provide your portfolio URL.');
    e.preventDefault();
    return;
  }

  if (!favColorInput.value) {
    alert('Please select your favorite color.');
    e.preventDefault();
    return;
  }

  // If everything is fine, the form can be submitted
  alert(`Form submitted!\nName: ${nameInput.value}\nPortfolio: ${portfolioInput.value}\nFavorite Color: ${favColorInput.value}\nLikeness: ${likenessInput.value || 'N/A'}`);
});
