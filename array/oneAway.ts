function oneAway(firstStr: string, secondStr: string) {
  let matchesNotFound = 0;

  firstStr.split("").forEach(char => {
    if (secondStr.indexOf(char) === -1) {
      matchesNotFound++;
    }
  });

  return (
    matchesNotFound <= 1 && Math.abs(firstStr.length - secondStr.length) <= 1
  );
}
