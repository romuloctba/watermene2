import './style.css'

const resetButton = document.getElementById('resetButton') as HTMLButtonElement;
const sizeSelect = document.getElementById('sizeSelect') as HTMLSelectElement;
const xSlider = document.querySelector<HTMLInputElement>('#position-x')!;
const ySlider = document.querySelector<HTMLInputElement>('#position-y')!;
const transparencySlider = document.querySelector<HTMLInputElement>('#transparency')!;
const canvas = document.querySelector<HTMLCanvasElement>('#menearea')!;
const ctx = canvas.getContext('2d')!;
const mainElement = document.getElementById('main') as HTMLDivElement;
const closeMain = document.getElementById('closeMain') as HTMLButtonElement;


const imageInput = document.querySelector<HTMLInputElement>('#imageInput')!;
const backgroundInput = document.getElementById('backgroundInput') as HTMLInputElement;

const DEFAULT_IMAGE_WIDTH = 88;

let image: HTMLImageElement | null = null;
let imageSize = DEFAULT_IMAGE_WIDTH; // Default size

let backgroundImage: HTMLImageElement | null = null;

imageInput.addEventListener('change', function (e: Event) {
  const target = e.target as HTMLInputElement;
  const file = target.files![0];
  const reader = new FileReader();

  reader.onload = function (event: ProgressEvent<FileReader>) {
    const img = new Image();
    img.onload = function () {
      image = img;
      drawImage();
    };
    img.src = event.target!.result as string;
  };

  reader.readAsDataURL(file);
});

// Handle slider changes
xSlider.addEventListener('input', drawImage);
ySlider.addEventListener('input', drawImage);
transparencySlider.addEventListener('input', drawImage);

// Handle size selection
sizeSelect.addEventListener('change', (e: Event) => {
  const target = e.target as HTMLSelectElement;
  imageSize = parseInt(target.value, 10);
  drawImage();
});

// Handle background image upload
backgroundInput.addEventListener('change', (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files![0];
  const reader = new FileReader();

  reader.onload = (event: ProgressEvent<FileReader>) => {
    const img = new Image();
    img.onload = () => {
      backgroundImage = img;
      canvas.width = img.width; // Resize canvas to match background image width
      xSlider.setAttribute('max', '' + img.width);
      canvas.height = img.height;
      ySlider.setAttribute('max', '' + img.height);
      drawImage();
    };
    img.src = event.target!.result as string;
  };

  reader.readAsDataURL(file);
});

function drawImage() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (backgroundImage) {
    ctx.drawImage(backgroundImage, 0, 0);
  }

  if (image) {
    const x = parseInt(xSlider.value, 10);
    const y = parseInt(ySlider.value, 10);

    const width = imageSize;
    const height = (imageSize / image.width) * image.height;

    const transparency = parseFloat(transparencySlider.value || '0.5');
    ctx.globalAlpha = transparency;
    
    ctx.drawImage(image, x, y, width, height);

    ctx.globalAlpha = 1.0;
  }
}

type SEAL_FORM_OPTIONS = 'CHOOSE_SEAL' | 'SELF_SEAL';

function toggleSealForm(value: SEAL_FORM_OPTIONS) {
  const visible = document.querySelector('#how-form .visible')
  visible?.classList.remove('visible');
  visible?.classList.add('hidden');

  console.log('removed');

  document.getElementById(value)!.classList.add('visible');
  document.getElementById(value)!.classList.remove('hidden');
}

const how = document.getElementById('how')!;

how.addEventListener('change', function (e: Event) {
  const target = e.target as HTMLSelectElement;
  toggleSealForm(target.value as SEAL_FORM_OPTIONS);

})

resetButton.addEventListener('click', resetForm);

function resetForm() {
  const form = document.getElementById('the-form') as HTMLFormElement;
  form.reset();
  
  // Reset canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = 100;
  canvas.height = 200;
  
  // Reset variables
  image = null;
  imageSize = DEFAULT_IMAGE_WIDTH;
  backgroundImage = null;
  
  drawImage(); // Redraw the canvas with the default settings
}

closeMain.addEventListener('click', toggleMain);

function toggleMain() {
  const isClosed = mainElement.classList.contains('closed');

  if (!isClosed) {
    mainElement.classList.add('closed');
    closeMain.classList.add('closed');
    return;
  }
  
  closeMain.classList.remove('closed');
  mainElement.classList.remove('closed');
}