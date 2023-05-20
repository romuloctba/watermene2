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
export function changedHow (e: Event) {
    const target = e.target as HTMLSelectElement;
    toggleSealForm(target.value as SEAL_FORM_OPTIONS);
}
  