'use strict';

//The goal of the project is to open the same modal with the 3 diferent buttons that share the same class

//Selecting the elements from the DOM
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnModalClose = document.querySelector('.close-modal');
const btnsModalOpen = document.querySelectorAll('.show-modal');

//Show the modal
function show() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log(modal);
}

//Hide the modal
function hide() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

//Add click events to buttons to show modal
for (let i = 0; i < btnsModalOpen.length; i++) {
  btnsModalOpen[i].addEventListener('click', show);
}

//Close the modal buttons and overlay
btnModalClose.addEventListener('click', hide);
overlay.addEventListener('click', hide);

//ESC to close the moda
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') hide();
});
