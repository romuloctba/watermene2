import { makeHidden, makeVisible } from "./ui";

const instructionsContainer = document.getElementById('instructions-container') as HTMLDivElement;

export function showInstructions() {
    const instructionsParagraph = `<ol>
        <li>Envie o Mene no qual quer adicionar a selo.</li>
        <li>Escolha entre os selos disponíveis ou <span class="news-badge">*</span>envie o seu próprio selo.</li>
        <li>Posicione, escolha o tamanho, e altere a transparência.</li>
        <li>Faça download do seu Mene finalizado</li>
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