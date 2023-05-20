// Add other form-related functions as needed
export const transparencySlider = document.querySelector<HTMLInputElement>('#transparency')!; 
export const xSlider = document.querySelector<HTMLInputElement>('#position-x')!;
export const ySlider = document.querySelector<HTMLInputElement>('#position-y')!;
export const resetButton = document.getElementById('resetButton') as HTMLButtonElement;
export const sizeSelect = document.getElementById('sizeSelect') as HTMLSelectElement;
export const closeMain = document.getElementById('closeMain') as HTMLButtonElement;
export const how = document.getElementById('how')!;
export const imageInput = document.querySelector<HTMLInputElement>('#imageInput')!;
export const backgroundInput = document.getElementById('backgroundInput') as HTMLInputElement;
export const canvas = document.querySelector<HTMLCanvasElement>('#menearea')!;
export const form = document.getElementById('the-form') as HTMLFormElement;

export function resetForm() {
  form.reset();
}
