import { makeHidden, makeVisible } from "./ui";

const instructionsContainer = document.getElementById('instructions-container') as HTMLDivElement;

export function showInstructions() {
    const instructionsParagraph = `
    <div class="wordart superhero">
        <div class="logo-ball"></div>
        <h1 class="text">WaterMene</h1>
    </div>
    
    <ol>
        <li>Envie o Mene para adicionar o selo.</li>
        <li>Escolha entre os selos disponíveis<span class="news-badge">*</span> ou envie o seu próprio selo.</li>
        <li>Posicione, escolha o tamanho, e altere a transparência.</li>
        <li>Faça download do seu Mene finalizado<span class="news-badge">**</span></li>
        <li class="warning">
            *Em breve
        </li>
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