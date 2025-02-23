import { refs } from './refs';
import { showForms } from './time-show-form';
import { handleTimeFormInput } from './handlers';

document.addEventListener('DOMContentLoaded', () => {
  refs.timeForm.addEventListener('input', e => {
    if (e.target.classList.contains('time-input')) {
      handleTimeFormInput(e);
    }
  });
});

refs.timeTriggerButton.addEventListener('click', showForms);
