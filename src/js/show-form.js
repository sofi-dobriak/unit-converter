import { refs } from './refs';

export function showForms() {
  const isOpen = refs.form.classList.contains('active');

  if (isOpen) {
    refs.form.classList.remove('active');
  } else {
    refs.form.classList.add('active');
  }
}
