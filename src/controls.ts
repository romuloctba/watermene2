// Add other form-related functions as needed
export const transparencySlider = document.querySelector<HTMLInputElement>('#transparency')!; 
export const xSlider = document.querySelector<HTMLInputElement>('#position-x')!;
export const ySlider = document.querySelector<HTMLInputElement>('#position-y')!;
export const resetButton = document.getElementById('resetButton') as HTMLButtonElement;
export const sizeSelect = document.getElementById('sizeSelect') as HTMLSelectElement;
export const closeMain = document.getElementById('closeMain') as HTMLButtonElement;
export const how = document.getElementById('how')!;
export const howForm = document.getElementById('how-form')!;
export const imageInput = document.querySelector<HTMLInputElement>('#imageInput')!;
export const backgroundInput = document.getElementById('backgroundInput') as HTMLInputElement;
export const canvas = document.querySelector<HTMLCanvasElement>('#menearea')!;
export const form = document.getElementById('the-form') as HTMLFormElement;
export const uploadBackgroundForm = document.getElementById('upload-mene') as HTMLFormElement;
export const resetContainer = document.getElementById('reset-container') as HTMLDivElement;

function resetAllFields() {
  form.reset();
  backgroundInput.value ='';
  imageInput.value = '';
}

export function resetForm() {
  resetAllFields();
  makeVisible(uploadBackgroundForm);
  makeHidden(howForm);
  makeHidden(form);
  makeHidden(resetContainer);
}

export function toggleItemHidden(item: HTMLElement) {
  const isHidden = item.classList.contains('hidden');

  if (!isHidden) {
    makeHidden(item);
    return;
  }

  makeVisible(item);
}

export function makeVisible(item: HTMLElement) {
  item.classList.remove('hidden');
}

export function makeHidden(item: HTMLElement) {
  item.classList.add('hidden');
}
