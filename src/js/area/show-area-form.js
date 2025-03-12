import { refs } from './refs';

const areaTriggerButton = document.querySelector('.js-area-trigger-button');

export function showForms() {
  const isOpen = refs.areaForm.classList.contains('active');

  if (isOpen) {
    refs.areaForm.classList.remove('active');
    areaTriggerButton.classList.remove('active');
  } else {
    refs.areaForm.classList.add('active');
    areaTriggerButton.classList.add('active');
  }
}
