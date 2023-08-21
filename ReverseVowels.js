// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example
// Input: s = "hello"
// Output: "holle"

function reverseVowels(s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]); //create set of all vowels

  const wordArray = Array.from(s); //create word array from string

  //create pointers
  let left = 0;
  let right = wordArray.length - 1;

  //while left < right
  while (left < right) {
    //check if wordArray has vowels
    if (vowels.has(wordArray[left])) {
      //while right > left
      while (right > left) {
        //check if wordArray has vowels
        if (vowels.has(wordArray[right])) {
          //swap
          let temp = wordArray[left];
          wordArray[left] = wordArray[right];
          wordArray[right] = temp;
          //decrement right
          right--;
          //break
          break;
        }
        //decrement right
        right--;
      }
    }
    //increment left
    left++;
  }
  return wordArray.join("");
}
