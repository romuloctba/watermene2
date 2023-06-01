import { redrawCanvas, resizeCanvas } from "./canvas";
import { howForm, resetContainer, uploadBackgroundForm, xSlider, ySlider } from "./controls";
import { hideInstructions } from "./instructions";
import { toggleItemHidden } from "./ui";

let backgroundImage: HTMLImageElement | null = null;

export function setBackgroundImage(img: HTMLImageElement | null) {
  backgroundImage = img;
}

export function getBackgroundImage() {
  return backgroundImage;
}

export function drawBackground(ctx: CanvasRenderingContext2D) {
  const backgroundImage = getBackgroundImage();
  if (backgroundImage) {
    const { width, height } = getAdjustedSize(backgroundImage);

    ctx.drawImage(backgroundImage, 0, 0, width, height);
  }
}

export function getAdjustedSize(img: HTMLImageElement) {
  const newWidth = 960;
  const aspectRatio = img.width / img.height;
  const newHeight = newWidth / aspectRatio;

  return { width: newWidth, height: newHeight}
}

function onBackgroundUploaded() {
  hideInstructions();
  toggleItemHidden(uploadBackgroundForm);
  toggleItemHidden(resetContainer);
  toggleItemHidden(howForm);
}

export function changeBackground(e: Event) {
  const target = e.target as HTMLInputElement;
  const file = target.files![0];
  const reader = new FileReader();

  reader.onload = (event: ProgressEvent<FileReader>) => {
    const img = new Image();
    img.onload = () => {
      setBackgroundImage(img);

      const { width, height } = getAdjustedSize(img);

      xSlider.setAttribute('max', '' + width);
      ySlider.setAttribute('max', '' + height);

      resizeCanvas(width, height);
      redrawCanvas();
    };
    img.src = event.target!.result as string;
  };

  reader.readAsDataURL(file);
  onBackgroundUploaded();
}