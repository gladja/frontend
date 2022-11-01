function reverseWords(str) {
  const stringRevers = str.split("").reverse().join("");
  const wordRevers = stringRevers.split(" ").reverse().join(" ");
  console.log(wordRevers);
  return wordRevers;
}
reverseWords("The quick brown fox jumps over the lazy dog.");
