// =========== TEMP ===========

import { refs } from './js/refs';
import { handleInputFill, hadleReplaceButtonClick } from './js/handlers';

document.addEventListener('DOMContentLoaded', () => {
  refs.fahrenheitInput.addEventListener('input', handleInputFill);
  refs.celsiusInput.addEventListener('input', handleInputFill);
  refs.replaceButton.addEventListener('click', hadleReplaceButtonClick);
});

// =========== next ===========
