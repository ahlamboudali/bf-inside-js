'use strict'
/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  let original = x.toString();
  let originalSplited = original.split('');
  let originalreversed = originalSplited.reverse();
  let reversed = originalreversed.join('');

  return original == reversed;
};

describe('isPalindrome function', () => {
  test('should return true for palindromic numbers like 121', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test('should return false for non-palindromic numbers like -121', () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test('should return false for non-palindromic numbers like 10', () => {
    expect(isPalindrome(10)).toBe(false);
  });
});
