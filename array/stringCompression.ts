/**
 * String Compression: Implement a method to perform basic string compression using
 * the counts of repeated characters. For example, the string aabcccccaaa would
 * become a2b1c5a3. If the "compressed" string would not become smaller than
 * the original string, your method should return the original string.
 * You can assume the string has only uppercase and lowercase letters (a - z).
 */

function stringCompression(phrase: string) {
  const charCountMap = [];

  phrase.split("").forEach(currentChar => {
    const [previousChar, _count] = charCountMap.length
      ? charCountMap.slice(charCountMap.length - 2)
      : [0, 0];
    previousChar === currentChar
      ? ++charCountMap[charCountMap.length - 1]
      : charCountMap.push(currentChar) && charCountMap.push(1);
  });

  return charCountMap.length >= phrase.length ? phrase : charCountMap.join("");
}

console.log(stringCompression("aaaaaaaabbbbbbbbbbbbbbbbbbcc"));
