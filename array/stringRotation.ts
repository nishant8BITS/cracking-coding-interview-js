/**
 * String Rotation: Assume you have a method isSubstring which checks if
 * one word is a substring of another. Given two strings, 51 and 52,
 * write code to check if 52 is a rotation of 51 using only one call
 * to isSubstring (e.g.,"waterbottle"is a rotation of"erbottlewat").
 */

function rotateLeft(phrase: string) {
  return phrase.substring(1).concat(phrase[0]);
}

function isSubstring(phrase1: string, phrase2: string) {
  let index = 0,
    _isSubstring = false;

  while (index < phrase1.length) {
    phrase1 = rotateLeft(phrase1);
    if (phrase1 === phrase2) {
      _isSubstring = true;
      break;
    }
    index++;
  }
  return _isSubstring;
}
