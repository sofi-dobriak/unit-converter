import { refs } from './refs';

const speedTriggerButton = document.querySelector('.js-speed-trigger-button');

export function showForms() {
  const isOpen = refs.speedForm.classList.contains('active');

  if (isOpen) {
    refs.speedForm.classList.remove('active');
    speedTriggerButton.classList.remove('active');
  } else {
    refs.speedForm.classList.add('active');
    speedTriggerButton.classList.add('active');
  }
}
