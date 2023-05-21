import { changeBackground } from "./background";
import { clearCanvas, downloadCanvas, redrawCanvas, resizeCanvas } from "./canvas";
import { backgroundInput, closeMain, downloadButton, how, imageInput, resetButton, sizeSelect, transparencySlider, xSlider, ySlider } from "./controls";
import { changeSize, clearSeal, loadedSeal } from "./image";
import { changedHow, resetForm, toggleMain } from "./ui";

backgroundInput.addEventListener('change', changeBackground);
closeMain.addEventListener('click', toggleMain);
how.addEventListener('change', changedHow)
imageInput.addEventListener('change', loadedSeal);
sizeSelect.addEventListener('change', changeSize);
transparencySlider.addEventListener('input', redrawCanvas);
resetButton.addEventListener('click', () => {
    resetForm();
    clearSeal();
    clearCanvas();
    resizeCanvas(0, 0);
});

ySlider.addEventListener('input', redrawCanvas);
xSlider.addEventListener('input', redrawCanvas);

downloadButton.addEventListener('click', downloadCanvas, false);