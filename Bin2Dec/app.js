// DONE: user can enter up to 8 binary digits in one field
// DONE: user must be notified if anything other than a 0 or 1 was entered
// DONE: user views the result in a single output field containing the decimal(base10) equiv. of the binary number that was entered

// CONSTRAINTS
// No arrays can be used to contain the binary digits
// determining eqiv. of binary digit in sequence must be calc using a single math func.
//    for ex. natural Logarithm. must figure out which func to use.

const resultOutput = document.querySelector('#result');
const convertBtn = document.querySelector('#convert-btn');
const binaryInput = document.querySelector('#binary');

const alertUser = (msg) => {
  window.alert(msg);
};

const isValidInput = (input) => {
  // check each index of input string
  for (let i = 0; i < input.length; i++) {
    // convert input to a number
    const currentNumber = Number(input[i]);
    // checking to see if number isNot 0 || 1, mark input as invalid
    if (currentNumber !== 0 && currentNumber !== 1) {
      return false;
    }
  }
  // marks input valid if previous check passes
  return true;
};

const binary2Decimal = (input) => {
  // to convert binary to decimal start with prior value of 0, multiply by 2, + nextBit
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    const currentNum = Number(input[i]);
    result = result * 2 + currentNum;
  }
  return result;
};

const handleSubmit = () => {
  // grab value from input
  let binaryVal = binaryInput.value;
  // if input is blank or larger than 8 characters, notify user
  if (binaryVal === '') return alertUser('Invalid input');

  // validate input only has 0's and 1's & notify user if input has other than 0/1
  if (!isValidInput(binaryVal))
    return alertUser('Input can only contain 0 & 1');

  // output result to user
  resultOutput.textContent = binary2Decimal(binaryVal);
};

convertBtn.addEventListener('click', handleSubmit);
