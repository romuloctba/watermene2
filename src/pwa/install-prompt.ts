import { installButton, installButtonContainer } from "../controls";
import { makeHidden, makeVisible } from "../ui";
type BeforeInstallPromptEvent = Event & Record<string, any>;

let deferredPrompt: BeforeInstallPromptEvent | undefined;

window.addEventListener('beforeinstallprompt', (event: BeforeInstallPromptEvent) => {
  event.preventDefault();
  deferredPrompt = event;
  makeVisible(installButtonContainer)
});

installButton.addEventListener('click', () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('App installed successfully!');
      } else {
        console.log('App installation canceled.');
      }

      deferredPrompt = undefined;
      makeHidden(installButtonContainer)
    });
  }
  makeHidden(installButtonContainer);
});
