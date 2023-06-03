import { clearCanvas, resizeCanvas } from "./canvas";
import { backgroundInput, form, howForm, imageInput, loadingMessage, resetContainer, settingsIcon, uploadBackgroundForm } from "./controls";
import { clearSeal } from "./image";
import { showInstructions } from "./instructions";

const mainElement = document.getElementById('main') as HTMLDivElement;
const closeMain = document.getElementById('closeMain') as HTMLButtonElement;
export type SEAL_FORM_OPTIONS = 'CHOOSE_SEAL' | 'SELF_SEAL';

export function toggleMain() {
  const isClosed = mainElement.classList.contains('closed');

  if (!isClosed) {
    mainElement.classList.add('closed');
    closeMain.classList.add('closed');
    return;
  }

  closeMain.classList.remove('closed');
  mainElement.classList.remove('closed');
}

// Add other UI-related functions as needed
export function toggleSealForm(value: SEAL_FORM_OPTIONS) {
  const visible = document.querySelector('#how-form .visible')
  visible?.classList.remove('visible');
  visible?.classList.add('hidden');

  console.log('removed');

  document.getElementById(value)!.classList.add('visible');
  document.getElementById(value)!.classList.remove('hidden');
}
export function changedHow(e: Event) {
  const target = e.target as HTMLSelectElement;
  toggleSealForm(target.value as SEAL_FORM_OPTIONS);
}


function resetAllFields() {
  form.reset();
  backgroundInput.value = '';
  imageInput.value = '';
}

export function resetForm() {
  resetAllFields();
  showInstructions();
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

export function resetAppState() {
  resetForm();
  clearSeal();
  clearCanvas();
  resizeCanvas(0, 0);
}

export function updateLoadingMessage(counter: number) {
  loadingMessage.innerHTML = `<div class="loadingHeart"><div class="lds-heart"><div></div></div></div> Carregando Selos, aguarde... (#${counter}) `;
}

export function removeLoadingMessage() {
  makeHidden(loadingMessage);
}