import { changeBackground } from "./background";
import { clearCanvas, downloadCanvas, redrawCanvas } from "./canvas";
import { backgroundInput, closeMain, downloadButton, how, imageInput, resetButton, resetForm, sizeSelect, transparencySlider, xSlider, ySlider } from "./controls";
import { changeSize, clearSeal, loadedSeal } from "./image";
import { changedHow, toggleMain } from "./ui";

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
});

ySlider.addEventListener('input', redrawCanvas);
xSlider.addEventListener('input', redrawCanvas);

downloadButton.addEventListener('click', downloadCanvas, false);