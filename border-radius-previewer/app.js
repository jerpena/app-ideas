// DONE: User can see a box which has a border-radius prop applied to it
// DONE: User can change the 4 border-radius values that are applied to the box.
// DONE: User can copy the resulting CSS to the clipboard
// TODO: BONUS - User can change all 8 possible values of the border-radius in order to create a complex shape

const radiusInputs = document.querySelectorAll('.radius-input');
const boxElement = document.querySelector('.box');
const copyBtn = document.querySelector('#copy-btn');

const copyToClipboard = ({ target }) => {
  const cssPreElem = document.querySelector(`#css-output`);
  navigator.clipboard.writeText(cssPreElem.textContent);
  target.style.border = '2px solid lightgreen';
};

const handleChange = ({ currentTarget }) => {
  const corner = currentTarget.id;
  boxElement.style[corner] = `${currentTarget.value}px`;
  let cssOutputId = '';

  if (corner[6] === 'T' && corner[9] === 'L') {
    cssOutputId = 'tl';
  } else if (corner[6] === 'T' && corner[9] === 'R') {
    cssOutputId = 'tr';
  } else if (corner[6] === 'B' && corner[12] === 'L') {
    cssOutputId = 'bl';
  } else {
    cssOutputId = 'br';
  }

  const cssOutputElem = document.querySelector(`#${cssOutputId}`);
  // update span id with value of input
  cssOutputElem.textContent = currentTarget.value;
};

for (let i = 0; i < radiusInputs.length; i++) {
  radiusInputs[i].addEventListener('input', handleChange);
}

copyBtn.addEventListener('click', copyToClipboard);
