import { getMeneFilename } from "./canvas"
import { canvas, shareButton } from "./controls"

export async function share(data: ShareData) {
  if (!navigator.canShare(data)) {
    return;
  }
  try {
    await navigator.share(data)
  } catch (err: any) {
    if (err.name !== 'AbortError') {
      console.error(err.name, err.message)
    }
  }
}

function onShareClick() {
  canvas.toBlob((blob) => {
    if (!blob) {
      return;
    }

    const files = [new File([blob], getMeneFilename(), { type: blob.type })]
    const shareData = {
      text: 'Veja meu Mene',
      title: 'Mene criado com WaterMene V2',
      files,
    }

    share(shareData).then(results => {
      console.log('shared', results);
    });
  })
}

shareButton.addEventListener('click', onShareClick)