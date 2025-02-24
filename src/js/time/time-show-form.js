import { refs } from './refs';

const timeTriggerButton = document.querySelector('.js-time-trigger-button'); //for arrow

export function showForms() {
  const isOpen = refs.timeForm.classList.contains('active');

  if (isOpen) {
    refs.timeForm.classList.remove('active');
    timeTriggerButton.classList.remove('active');
  } else {
    refs.timeForm.classList.add('active');
    timeTriggerButton.classList.add('active');
  }
}
