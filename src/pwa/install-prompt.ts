type BeforeInstallPromptEvent = Event & Record<string, any>;

let deferredPrompt: BeforeInstallPromptEvent | undefined;

const installButton = document.getElementById('installButton') as HTMLButtonElement;
window.addEventListener('beforeinstallprompt', (event: BeforeInstallPromptEvent) => {
  event.preventDefault();
  deferredPrompt = event;
  // Show your custom install prompt here (e.g., a button)
  installButton.style.display = 'block';
});

// Handle the click event on the install button
installButton.addEventListener('click', () => {
  if (deferredPrompt) {
    // Prompt the user to install the app
    deferredPrompt.prompt();

    // Wait for the user's response
    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('App installed successfully!');
      } else {
        console.log('App installation canceled.');
      }

      // Reset the deferredPrompt variable
      deferredPrompt = undefined;

      // Hide the install button
      installButton.style.display = 'none';
    });
  }
});
