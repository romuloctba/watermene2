import { redrawCanvas } from "./canvas";
import { DEFAULT_IMAGE_WIDTH } from "./constants";
import { form, howForm, transparencySlider, xSlider, ySlider } from "./controls";
import { makeHidden, makeVisible } from "./ui";

let image: HTMLImageElement | null = null;
let imageSize = DEFAULT_IMAGE_WIDTH; // Default size

export function setImage(img: HTMLImageElement | null) {
  image = img;
}

export function getImage() {
  return image;
}

export function drawSeal(ctx: CanvasRenderingContext2D) {
  const image = getImage();
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
// Add other image-related functions as needed

function onSealLoaded() {
  makeHidden(howForm);
  makeVisible(form);
}

export function loadedSeal(e: Event) {
  const target = e.target as HTMLInputElement;
  const file = target.files![0];
  const reader = new FileReader();

  reader.onload = function (event: ProgressEvent<FileReader>) {
    const img = new Image();
    img.onload = function () {
      setImage(img);
      redrawCanvas();
    };
    img.src = event.target!.result as string;
  };

  reader.readAsDataURL(file);
  onSealLoaded();
}

export function changeSize(e: Event) {
  const target = e.target as HTMLSelectElement;
  imageSize = parseInt(target.value, 10);
  redrawCanvas();
}

export function clearSeal() {
  image = null;
  imageSize = DEFAULT_IMAGE_WIDTH;
}