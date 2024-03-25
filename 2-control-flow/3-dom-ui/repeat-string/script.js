import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  // debugger;

  // read user values
  const text = readString('user-text');
  const repeataions = readNumber('number-of-times');

  // repeat the string
  const repeatedText = text.repeat(repeataions);

  // display the repeated string
  display('repeated-output', repeatedText);
});
