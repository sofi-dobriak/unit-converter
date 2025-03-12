import { refs } from './refs';

const landTriggerButton = document.querySelector('.js-land-trigger-button');

export function showForms() {
  const isOpen = refs.landForm.classList.contains('active');

  if (isOpen) {
    refs.landForm.classList.remove('active');
    landTriggerButton.classList.remove('active');
  } else {
    refs.landForm.classList.add('active');
    landTriggerButton.classList.add('active');
  }
}
