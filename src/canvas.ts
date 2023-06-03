import { drawBackground } from "./background";
import { canvas } from "./controls";
import { drawSeal } from "./image";

let animationId: number | null = null;

export function clearCanvas(ctx?: CanvasRenderingContext2D) {
  let context = ctx || canvas.getContext('2d')!;
  context.clearRect(0, 0, canvas.width, canvas.height);
}

export function resizeCanvas(width: number, height: number) {
  canvas.width = width;
  canvas.height = height;
}

export function redrawCanvas() {
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
  }

  animationId = requestAnimationFrame(() => {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    clearCanvas(ctx);
    drawBackground(ctx)
    drawSeal(ctx);
  });
}

export function getMeneFilename() {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = String(currentDate.getFullYear());
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const formattedDate = `${day}-${month}-${year}-${hours}-${minutes}`;

  return `mene-${formattedDate}.png`;
}

export function downloadCanvas(this: HTMLAnchorElement) {

  const dataURL = canvas.toDataURL('image/png');

  // Create a temporary link element
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = getMeneFilename();

  // Trigger the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
