import { refs } from './refs';

const unitTriggerButton = document.querySelector(
  '.js-area-volume-trigger-button'
);

export function showForms() {
  const isOpen = refs.unitForm.classList.contains('active');

  if (isOpen) {
    refs.unitForm.classList.remove('active');
    unitTriggerButton.classList.remove('active');
  } else {
    refs.unitForm.classList.add('active');
    unitTriggerButton.classList.add('active');
  }
}
