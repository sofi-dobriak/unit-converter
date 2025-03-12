import { refs } from './refs';

const volumeTriggerButton = document.querySelector('.js-volume-trigger-button');

export function showForms() {
  const isOpen = refs.volumeForm.classList.contains('active');

  if (isOpen) {
    refs.volumeForm.classList.remove('active');
    volumeTriggerButton.classList.remove('active');
  } else {
    refs.volumeForm.classList.add('active');
    volumeTriggerButton.classList.add('active');
  }
}
