import { refs } from './refs';

const massTriggerButton = document.querySelector('.js-mass-trigger-button');

export function showForms() {
  const isOpen = refs.massForm.classList.contains('active');

  if (isOpen) {
    refs.massForm.classList.remove('active');
    massTriggerButton.classList.remove('active');
  } else {
    refs.massForm.classList.add('active');
    massTriggerButton.classList.add('active');
  }
}
