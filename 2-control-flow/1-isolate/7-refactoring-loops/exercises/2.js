'use strict';

console.log('-- begin --');

const minutesLeft = 9;
let i = minutesLeft;

// Original for loop
for (let i = minutesLeft; i > 0; i--) {
  const message = `${i} minutes left`;
  console.log(message);
}

// Refactored while loop
while (i > 0) {
  const message = `${i} minutes left`;
  console.log(message);
  i--;
}

console.log('-- end --');
