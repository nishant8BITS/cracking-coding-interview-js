/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

function isUnique(input: string): boolean {
  const isUnique = !input.split("").some((char: string, index) => {
    return input.indexOf(char) !== index;
  });

  return isUnique;
}
