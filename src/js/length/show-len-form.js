import { refs } from './refs';

const lenTriggerButton = document.querySelector('.js-len-trigger-button');

export function showForms() {
  const isOpen = refs.lenForm.classList.contains('active');

  if (isOpen) {
    refs.lenForm.classList.remove('active');
    lenTriggerButton.classList.remove('active');
  } else {
    refs.lenForm.classList.add('active');
    lenTriggerButton.classList.add('active');
  }
}
