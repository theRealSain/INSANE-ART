const popupButtons = document.querySelectorAll('.popupButton');
const popupContainer = document.getElementById('popupContainer');
const closeButton = document.getElementById('closeButton');

popupButtons.forEach(button => {
  button.addEventListener('click', function() {
    popupContainer.style.display = 'flex';
  });
});

closeButton.addEventListener('click', function() {
  popupContainer.style.display = 'none';
});



const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dark-mode');

dropdownButton.addEventListener('click', function() {
  if (dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('#dropdownButton')) {
    dropdownMenu.style.display = 'none';
  }
});
