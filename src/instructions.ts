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
        <li>Escolha, ou envie, um selo/marca d'água</li>
        <li>Posicione</li>
        <li>Faça download!<span class="news-badge">**</span></li>

        <li class="warning">
            As imagens serão ajustadas para um máximo de 960px de largura.
        </li>
        <li class="warning">
        <br />
        **Atenção: Nem todos os watermenes são compliance com a regras do grupo. Contacte o SAC/Moderação em caso de dúvida.
        </li>

    </ol>
    <div>
    <h3>Ver Código Fonte</h3>
      <a href="https://github.com/romuloctba/watermene2" target="blank">
        <img src="https://camo.githubusercontent.com/1204ee3ae24cd3d431669311f6d03d67ed69da03b2439f22ad4b6247021036d3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f77617465726d656e652d76322d677265656e" alt="WaterMene V2" />
      </a>
    </div>
    
    `;
    instructionsContainer.innerHTML = instructionsParagraph;
    makeVisible(instructionsContainer);
}
export function hideInstructions() {
    makeHidden(instructionsContainer);
    instructionsContainer.innerHTML = "";
}

showInstructions();