import { settingsIcon } from "./controls";
import { makeHidden, makeVisible, toggleItemHidden } from "./ui";

const settingsContainer = document.getElementById('settings-container') as HTMLDivElement;

export function showSettings() {
    const settingsParagraph = `
    <div class="">
    <div class="wordart superhero">
        <h1 class="text">Config.</h1>
    </div>
        <fieldset>
            <legend>Cor do tema</legend>

            <input type="color" id="theme-color" name="theme-color"
           value="#e66465">
           <label for="theme-color">Cor do Tema</label>
        </fieldset>

        <fieldset>
            <legend>Feedback</legend>
            
        </fieldset>

    </div>
    `;
    settingsContainer.innerHTML = settingsParagraph;
    toggleItemHidden(settingsContainer);
    const picker = document.getElementById('theme-color')! as HTMLInputElement;

        picker.addEventListener('change', function(e: any) {
            document
                .documentElement
                .style
                .setProperty('--main-color', e.target!.value)
        })
}

export function hidesettings() {
    makeHidden(settingsContainer);
    settingsContainer.innerHTML = "";
}

settingsIcon.addEventListener('click', () => {
    console.log('showing settings');
    showSettings()
  } );
