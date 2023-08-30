// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function (strs) {
  //store the letters here
  let prefix = "";

  //if the input is empty return the prefix (which is empty)
  if (strs.length === 0) {
    return prefix;
  }

  //grab the first word so that we can compare things to it
  let comparisonWord = strs[0];
  //index is the index we are grabbing. Each string has an index (letter)
  let comparisonIndex = 0;

  //loop over each letter of strs[0] aka comparisonword
  for (let comparisonLetter of comparisonWord) {
    //loop over every string in array strs
    for (let i = 1; i < strs.length; i++) {
      //here we grab a word from the array to compare comparison to current
      let currentWord = strs[i];
      //make currentletter the index (letter) we are comparing
      let currentLetter = currentWord.charAt(comparisonIndex);
      //if the currentletter is not the same as the comparisonletter return prefix
      //or index is greater than the length of te word, meaning we dont have more letters to compare
      if (
        comparisonLetter !== currentLetter ||
        comparisonIndex > currentWord.length
      ) {
        return prefix;
      }
    }
    //if the letters match add the letter to the prefix and move on to the next letter
    comparisonIndex++;
    prefix += comparisonLetter;
  }
  return prefix;
};
