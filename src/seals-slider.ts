import { chosenSeal } from "./image";
import { removeLoadingMessage, updateLoadingMessage } from "./ui";

const DATA_ATTRIBUTE = 'data-counter';
const container = document.getElementById("slider")!;



const seals: string[] = [];


async function getSeals() {
  let counter = 0;
  let stop = false;

  while (!stop) {
    updateLoadingMessage(counter);
    await fetch(`seals/seal_${counter}.png`, { method: 'HEAD' }).then(result => {
      if (result.status === 404) {
        stop = true;
        removeLoadingMessage();
        return;
      }
      seals.push(`${counter}`);
      counter++;
    })
  }

  return Promise.resolve();
}

getSeals().then(() => {
  for (let i = 0; i < seals.length; i++) {
    console.log('creating el ', i);
    const sealControl = document.createElement("button");
    sealControl.setAttribute(DATA_ATTRIBUTE, seals[i]);
    sealControl.setAttribute('aria-label', `Escolher o selo ${i + 1}`);
    sealControl.classList.add("slide");
    sealControl.addEventListener('click', function() {
      const chosenImg = this.getElementsByTagName('img')[0];
      chosenSeal(chosenImg);
    });
  
  
    const loadColumn = (elements: IntersectionObserverEntry[]) => {
      console.log('intercepted')
  
      setTimeout(() => {
        elements.forEach((element) => {
          if (element.isIntersecting) {
            const currentCounter = element.target.getAttribute(DATA_ATTRIBUTE)!;
            const img = document.createElement('img');
            img.setAttribute('alt', `Selo ${currentCounter + 1}`)
            img.setAttribute('src', 'seals/seal_' + currentCounter + '.png');
            element.target.appendChild(img);
  
            observer.unobserve(element.target);
          }
        });
      }, 750);
    };
  
    const observer = new IntersectionObserver(loadColumn);
    const target = sealControl;
    observer.observe(target);
  
    container.appendChild(sealControl);
  }
});


