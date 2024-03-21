/**
 * Checks if a string is a palindrome.
 * Palindrome: a string that is the same forwards or backwards.
 *
 * @param {string} [toCheck=''] - The string that might be a palindrome.
 * @returns {boolean} Is the string a palindrome?
 */
export const isPalindrome = (toCheck = '') => {
  // Convert the string to lowercase
  const lowerCaseString = toCheck.toLowerCase();
  
  // Remove non-alphanumeric characters and spaces
  const cleanString = lowerCaseString.replace(/[^a-z0-9]/g, '');
  
  // Check if the clean string is equal to its reverse
  return cleanString === cleanString.split('').reverse().join('');
};
