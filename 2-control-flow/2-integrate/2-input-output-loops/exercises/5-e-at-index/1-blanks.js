// #todo

'use strict';

let validInput = '';

let index = 0;
while (validInput === '') {
  index = index + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`,
  );

  if (userInput === null || userInput === '') {
    alert('that is nothing');
  } else if (userInput.length < index) {
    alert('too short');
  } else if (userInput[index - 1] === 'e' || userInput[index - 1] === 'E') {
    validInput = userInput;
    break;
  } else {
    alert('input has no "e" or "E" as the ' + index + 'th character');
  }
}

alert('done: "' + validInput + '"');
