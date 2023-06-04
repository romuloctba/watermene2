import { makeHidden, makeVisible } from "./ui";

const instructionsContainer = document.getElementById('instructions-container') as HTMLDivElement;

export function showInstructions() {
    const instructionsParagraph = `
    <div role="figure" alt="WaterMene V2" class="wordart superhero">
        <div title="Avestruz" class="logo-ball"></div>
        <h1 class="text">WaterMene</h1>
    </div>
    
    <ol aria-label="Instruções">
        <li>Envie o seu Mene</li>
        <li>Escolha um selo, ou envie sua marca d'água</li>
        <li>Posicione e ajuste</li>
        <li>Compartilhe no Grupo (ou baixe)</span></li>

        <li class="text">
            As imagens serão ajustadas para um máximo de 960px de largura.
        </li>
        <li class="text">
            <h2> Avisos </h2>
            1. Suas imagens <strong>não são</strong> salvas pelos nossos servidores, somente pela rede social que você compartilhar (se compartilhar). <br />
            <br /><br />
            2. Atenção: Nem todos os watermenes são compliance com as regras do grupo. <br />Contacte o SAC/Moderação em caso de dúvida.
            <br /><br />
            3. Este é um projeto de código aberto, sem garantias.
        </li>
        <li class="text">
            <h2>Ver Código Fonte</h2>
            <a href="https://github.com/romuloctba/watermene2" target="blank">
                <img src="https://camo.githubusercontent.com/1204ee3ae24cd3d431669311f6d03d67ed69da03b2439f22ad4b6247021036d3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f77617465726d656e652d76322d677265656e" alt="WaterMene V2" />
            </a>
        </li>
    </ol>

<!--    <div>
      <button id="settingsIcon">
          <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Configurar
          </span>
      </button>
    </div>
    -->
    `;
    instructionsContainer.innerHTML = instructionsParagraph;
    makeVisible(instructionsContainer);
}
export function hideInstructions() {
    makeHidden(instructionsContainer);
    instructionsContainer.innerHTML = "";
}

showInstructions();