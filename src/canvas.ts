import { drawBackground } from "./background";
import { canvas } from "./controls";
import { drawSeal } from "./image";


export const ctx = canvas.getContext('2d')!;

export function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function resizeCanvas(width: number, height: number) {
  canvas.width = width;
  canvas.height = height;
}

export function redrawCanvas() {
    clearCanvas();
    drawBackground(ctx)
    drawSeal(ctx);
  }
  