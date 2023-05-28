import { chosenSeal } from "./image";

const DATA_ATTRIBUTE = 'data-counter';
const container = document.getElementById("slider")!;



const seals: string[] = [];


async function getSeals() {
  let counter = 0;
  let stop = false;

  while (!stop) {
    await fetch(`./seals/seal_${counter}.png`).then(result => {
      if (result.status === 404) {
        stop = true;
        return;
      }
      console.log('loaded seal ', counter);
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
            const currentCounter = element.target.getAttribute(DATA_ATTRIBUTE);
            const img = document.createElement('img');
            img.setAttribute('src', './seals/seal_' + currentCounter + '.png');
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


