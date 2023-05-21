import { changeBackground } from "./background";
import { downloadCanvas, redrawCanvas } from "./canvas";
import { backgroundInput, closeMain, downloadButton, how, imageInput, resetButton, sizeSelect, transparencySlider, xSlider, ySlider } from "./controls";
import { changeSize, loadedSeal } from "./image";
import { changedHow, resetAppState, toggleMain } from "./ui";

backgroundInput.addEventListener('change', changeBackground);
closeMain.addEventListener('click', toggleMain);
downloadButton.addEventListener('click', downloadCanvas, false);
how.addEventListener('change', changedHow)
imageInput.addEventListener('change', loadedSeal);
resetButton.addEventListener('click', resetAppState);
sizeSelect.addEventListener('change', changeSize);
transparencySlider.addEventListener('input', redrawCanvas);
xSlider.addEventListener('input', redrawCanvas);
ySlider.addEventListener('input', redrawCanvas);