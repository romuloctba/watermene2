import { changeBackground } from "./background";
import { downloadCanvas, redrawCanvas } from "./canvas";
import { backToSealsButton, backgroundInput, closeMain, downloadButton, how, imageInput, resetButton, sizeSelect, transparencySlider, xSlider, ySlider } from "./controls";
import { changeSize, loadedSeal, onBackToSeals } from "./image";
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
backToSealsButton.addEventListener('click', onBackToSeals)