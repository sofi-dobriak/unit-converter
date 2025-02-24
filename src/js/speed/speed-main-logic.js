import { refs } from './refs';
import { showForms } from './speed-show-form';
import { handleSpeedFormInput } from './handlerts';

document.addEventListener('DOMContentLoaded', () => {
  refs.speedForm.addEventListener('input', e => {
    if (e.target.classList.contains('speed-input')) {
      handleSpeedFormInput(e);
    }
  });
});

refs.speedTriggerButton.addEventListener('click', showForms);
