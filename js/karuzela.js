const opinieSection = document.getElementById('opinie');
const opinieBox = document.querySelector('div.opinie');
const opinieSlider = document.querySelector('div.opinieSlider');
const opinieSingle = document.querySelectorAll('div.opinia');

let opinieBoxWidth = opinieBox.offsetWidth;
let lastIndex = 3;
let leftPosition = 0;

const calcLastindex = () => {
  if (opinieBoxWidth == 300) {
    lastIndex = 1;
  } else if (opinieBoxWidth == 630) {
    lastIndex = 2;
  } else {
    lastIndex = 3;
  }
}

calcLastindex();

const setLeftPosition = () => {
  opinieSlider.style.left = `-${leftPosition}px`
}

const calcLeftPosition = () => {
  if (lastIndex < opinieSingle.length) {
    leftPosition = leftPosition + 30 + 300;
    lastIndex++;
  } else {
    leftPosition = 0;
    lastIndex = 3;
  }
}

const runSlide = () => {
  calcLeftPosition();
  setLeftPosition();
}

const setBoxWidth = () => {
  let opinieBoxWidth = opinieBox.offsetWidth;
  calcLastindex();
}

window.setInterval(runSlide, 3500)
window.addEventListener('resize', setBoxWidth);