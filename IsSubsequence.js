// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some
// (can be none) of the characters without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example

// Input: s = "abc", t = "ahbgdc"
// Output: true

function isSubsequence(s, t) {
  //create sPointer to keep track of index of s string
  //create tPointer to keep track of index of t string
  let sPointer = 0;
  let tPointer = 0;

  //create while loop for (sPointer < s.length and tPointer < t.length)
  while (sPointer < s.length && tPointer < t.length) {
    //create condition to see if the values of each string indexes are equal to each other
    if (s[sPointer] === t[tPointer]) sPointer++; //if they are equal we increment sPointer
    //increment tPointer
    tPointer++;
  }

  //return if sPointer is equal to s
  return sPointer === s.length;
}
