// TEMP

import { refs } from './js/temp/refs';
import { handleInputFill, hadleReplaceButtonClick } from './js/temp/handlers';

const { fahrenheit, celsius } = refs.tempForm.elements;

fahrenheit.addEventListener('input', handleInputFill);
celsius.addEventListener('input', handleInputFill);
refs.replaceButton.addEventListener('click', hadleReplaceButtonClick);
