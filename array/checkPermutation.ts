/**
 * Check Permutation: Given two strings, write a method to decide if one
 * is a permutation of the other.
 */

function checkPermutation(input1: string, input2: string): boolean {
  return (
    input1.length === input2.length &&
    !input1.split("").some(function(char) {
      return input2.indexOf(char) === -1;
    })
  );
}
