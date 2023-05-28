import { makeHidden, makeVisible } from "./ui";

const instructionsContainer = document.getElementById('instructions-container') as HTMLDivElement;

export function showInstructions() {
    const instructionsParagraph = `
    <div class="wordart superhero">
        <div class="logo-ball"></div>
        <h1 class="text">WaterMene</h1>
    </div>
    
    <ol>
        <li>Envie o seu Mene</li>
        <li>Escolha um selo, ou envie</li>
        <li>Posicione</li>
        <li>Faça download!<span class="news-badge">**</span></li>

        <li class="warning">
        **Atenção: Nem todos os watermenes são compliance com a regras do grupo. Contacte o SAC/Moderação em caso de dúvida.
        </li>
    </ol>
    
    `;
    instructionsContainer.innerHTML = instructionsParagraph;
    makeVisible(instructionsContainer);
}
export function hideInstructions() {
    makeHidden(instructionsContainer);
    instructionsContainer.innerHTML = "";
}

showInstructions();