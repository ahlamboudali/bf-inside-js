/**
 * Converts an array sort the new array by side-effect
 *
 * @param { any } [numbers = []] - Array number wich is empty
 * @param { boolean } [up = true] - up wich value is true
 * @returns { any } - Sorted numbers
 *
 * @example
 *
 * sorting the numbers([4, 2, 3, 1], true); //--> [1, 2, 3, 4]
 *
 * @example
 *
 * sorting the numbers([5, 7, 2]); //--> [2, 5, 7]
 *
 */
export const sort = (numbers = [], up = true) => {
  // create a new array to avoid side-effects
  const numbersCopy = [];

  // copy items from the argument to the new array
  for (const num of numbers) {
    numbersCopy.push(num);
  }

  // sort the new array by side-effect
  numbersCopy.sort((a, b) => a - b);

  // reverse the new array if requested
  if (!up) {
    numbersCopy.reverse();
  }

  // return sorted numbers
  return numbersCopy;
};
