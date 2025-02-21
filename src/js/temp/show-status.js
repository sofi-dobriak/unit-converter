import { refs } from './refs';

export function showSuccess() {
  refs.fahrenheitInput.classList.add('success');
  refs.celsiusInput.classList.add('success');
}
export function hideSuccess() {
  refs.fahrenheitInput.classList.remove('success');
  refs.celsiusInput.classList.remove('success');
}

export function showError() {
  refs.fahrenheitInput.classList.add('error');
  refs.celsiusInput.classList.add('error');
}

export function hideError() {
  refs.fahrenheitInput.classList.add('error');
  refs.celsiusInput.classList.add('error');
}
