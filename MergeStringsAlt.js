// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order, starting with word1.
// If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.
const word1 = "abc";
const word2 = "pqr";

function mergeAlternately(word1, word2) {
  let mergedString = [];

  for (let i = 0; i < word1.length + word2.length; i++) {
    mergedString.push(word1[i]);
    mergedString.push(word2[i]);
  }
  return mergedString.join("");
}

console.log(mergeAlternately(word1, word2));
