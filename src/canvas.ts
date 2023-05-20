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

export function downloadCanvas(this: HTMLAnchorElement) {
  var dataUrl = canvas.toDataURL('image/png');
  this.href = dataUrl.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
};
