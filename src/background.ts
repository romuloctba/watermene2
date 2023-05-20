import { redrawCanvas, resizeCanvas } from "./canvas";
import { howForm, resetContainer, toggleItemHidden, uploadBackgroundForm, xSlider, ySlider } from "./controls";

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
        ctx.drawImage(backgroundImage, 0, 0);
    }
}

function onBackgroundUploaded() {
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
        xSlider.setAttribute('max', '' + img.width);
        ySlider.setAttribute('max', '' + img.height);
  
        resizeCanvas(img.width, img.height);
        redrawCanvas();
      };
      img.src = event.target!.result as string;
    };
  
    reader.readAsDataURL(file);
    onBackgroundUploaded();
  }