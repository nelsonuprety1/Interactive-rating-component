/**
 * Things to implement in the app:
 *
 * 1) Get value from the selected option's value attribute
 * 2) Can only select one option at a time (but can change the selected option)
 * 3) When an option is selected, the value of the option is displayed in the You selected paragraph only after the submit button is clicked
 * 4) The second .container-2 will be displayed on top of the first container only after the submit button is clicked
 */

'use strict';

// The main function of this code is to show the user's selected rating in the thank you state.

// The following code querys the rate buttons, submit button, thank you state, and the selected rating.
const rating = document.querySelector('.rating');
const submitBtn = document.querySelector('.submit');
const thankYouState = document.querySelector('.container-2');
const select = document.querySelector('.select');
const rateButtons = document.querySelectorAll('.rate');

// The following code creates a variable called selectedRating and sets it to null.
let selectedRating = null;

// The following code creates a function called handleSubmit that will check if the user has selected a rating. If not, the user will be alerted to select a rating. If they have, the thank you state will be shown.
const handleSubmit = () => {
  if (selectedRating === null) {
    alert('Please select a rating');
  } else {
    thankYouState.style.visibility = 'visible';
    select.textContent = `You selected ${selectedRating} out of 5`;
  }
};

// The following code creates a function called handleRatingSelection that will change the color of the selected button and set the selected rating to the button value.
const handleRatingSelection = e => {
  rateButtons.forEach(button => {
    button.style.backgroundColor = '';
    button.style.color = '';
  });

  e.target.style.backgroundColor = 'var(--color-orange)';
  e.target.style.color = 'var(--color-white)';
  selectedRating = e.target.value;
};

// The following code adds an event listener to the submit button that will run the handleSubmit function when clicked.
submitBtn.addEventListener('click', handleSubmit);
// The following code adds an event listener to the rating that will check if the target has the class of rate. If so, the handleRatingSelection function will run.
rating.addEventListener('click', e => {
  if (e.target.classList.contains('rate')) {
    handleRatingSelection(e);
  }
});
