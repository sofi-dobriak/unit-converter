import { showForms } from './show-volume-form';
import { refs } from './refs';
import { handleVolumeInput } from './handlers';

document.addEventListener('DOMContentLoaded', () => {
  refs.volumeForm.addEventListener('input', e => {
    if (e.target.classList.contains('volume-input')) {
      handleVolumeInput(e);
    }
  });
});

refs.volumeTriggerButton.addEventListener('click', showForms);
