// Given a string s, find the length of the longest substring without repeating characters.

// Example 1
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// ------ // ------ // ------ //

// We will have to loop through the string until a letter repeats.
// Create a set, itirate through the set and if a letter isnt in the set, add it.
// If a letter is already in the set, replace the letter in the set.
// Every time you add a new letter to the set, increate the variable 'longest', you will compare the length of the set to the variable 'longest'.

var lengthOfLongestSubstring = function (s) {
  let strlength = 0;
  // set to store letters
  let set = new Set();

  // pointers
  let left = 0;
  let right = 0;

  // while 0 < length of string
  while (right < s.length) {
    // extracts letter from string (s[0])
    // let letting = s[0]
    let letter = s[right];
    // if the set doesnt have letter
    if (!set.has(letter)) {
      // add letter to set
      set.add(letter);
      // update string length
      strlength = Math.max(strlength, set.size);
      // increment right to avoid infinite loop and go to the next letter
      right++;
    } else {
      // deleting from the left pointer if the letter is in the set
      set.delete(s[left]);
      left++;
    }
  }
  return strlength;
};
