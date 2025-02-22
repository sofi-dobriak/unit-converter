// =========== TEMP ===========

import { refs } from './js/refs';
import { handleInputFill, hadleReplaceButtonClick } from './js/handlers';
import { showForms } from './js/show-form';

document.addEventListener('DOMContentLoaded', () => {
  // refs.fahrenheitInput.addEventListener('input', handleInputFill);
  // refs.celsiusInput.addEventListener('input', handleInputFill);
  // refs.replaceButton.addEventListener('click', hadleReplaceButtonClick);
  refs.triggerButton.addEventListener('click', showForms);
});

// =========== next ===========
