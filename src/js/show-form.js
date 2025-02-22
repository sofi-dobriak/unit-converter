import { refs } from './refs';

const triggerButton = document.querySelector('.js-converter-trigger-button');

export function showForms() {
  const isOpen = refs.tempForm.classList.contains('active');

  if (isOpen) {
    refs.tempForm.classList.remove('active');
    triggerButton.classList.remove('active');
  } else {
    refs.tempForm.classList.add('active');
    triggerButton.classList.add('active');
  }
}
