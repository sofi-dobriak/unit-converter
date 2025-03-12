import { refs } from './refs';

const dateTriggerButton = document.querySelector('.js-date-trigger-button');

export function showForms() {
  const isOpen = refs.dateForm.classList.contains('active');

  if (isOpen) {
    refs.dateForm.classList.remove('active');
    dateTriggerButton.classList.remove('active');
  } else {
    refs.dateForm.classList.add('active');
    dateTriggerButton.classList.add('active');
  }
}
