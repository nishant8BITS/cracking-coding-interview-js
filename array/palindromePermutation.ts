function palindromePermutation(phrase: string) {
  let countOdd = 0;

  const charHash: {
    [key: string]: number;
  } = {};

  phrase
    .split("")
    .filter(char => char.trim())
    .forEach(char => {
      charHash[char] = charHash[char] ? charHash[char] + 1 : 1;
      charHash[char] % 2 !== 0 ? countOdd++ : countOdd--;
    });

  return countOdd <= 1;
}
