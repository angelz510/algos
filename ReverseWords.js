// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters.
// The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words.
// The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example
// Input: s = "the sky is blue"
// Output: "blue is sky the"
const s = "the sky is blue";

function reverseWords(s) {
  //turn string into array
  let wordArray = s.split(" ");

  let result = "";

  //itirate over array starting at the end of array
  for (let i = wordArray.length - 1; i >= 0; i--) {
    //if element at the index is empty, continue
    if (wordArray[i] == "") continue;
    //if there is one word in the array, add a space after the string
    if (result.length > 0) result += " ";
    //if not, then concat element to result
    result += wordArray[i];
  }
  //then finally return result
  return result;
}

console.log(reverseWords(s));
