import './style.css'

const sizeSelect = document.getElementById('sizeSelect') as HTMLSelectElement;
const xSlider = document.querySelector<HTMLInputElement>('#position-x')!;
const ySlider = document.querySelector<HTMLInputElement>('#position-y')!;
const canvas = document.querySelector<HTMLCanvasElement>('#menearea')!;
const ctx = canvas.getContext('2d')!;

const imageInput = document.querySelector<HTMLInputElement>('#imageInput')!;
const backgroundInput = document.getElementById('backgroundInput') as HTMLInputElement;



let image: HTMLImageElement | null = null;
let imageSize = 22; // Default size

let backgroundImage: HTMLImageElement | null = null;

imageInput.addEventListener('change', function (e: Event ) {
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
      xSlider.setAttribute('max', ''+img.width);
      canvas.height = img.height;
      ySlider.setAttribute('max', ''+img.height);
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

    ctx.drawImage(image, x, y, width, height);
  }
}