// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

function closeStrings(word1, word2) {
  //right off the bat if the strings arent the same length return false
  if (word1.length !== word2.length) return false;

  //use helper function to get array of letters
  const data1 = getData(word1);
  const data2 = getData(word2);

  //loop through array of letters in data1
  for (let i = 0; i < data1.letters.length; i++) {
    //if letters from both strings dont match or dont match frequency return false
    if (
      data1.letters[i] !== data2.letters[i] ||
      data1.times[i] !== data2.times[i]
    )
      return false;
  }
  //otherwise return true since the strings are considered close
  return true;

  //helper function that returns a sorted array of letters
  function getData(word) {
    //create empty object to store letters in. save the letters as keys and the number of times its in the string as the value
    const map = {};

    //loop through string
    for (const char of word) {
      //if letter does not exist as a key in the object, add it with a value of zero
      if (!map[char]) map[char] = 0;
      //increase the value of the key/letter in the map by 1
      //this is recording the number of times a letter is in the string
      map[char]++;
    }

    return {
      //letters get assigned keys to the map and sorted
      letters: Object.keys(map).sort(),
      //times is how frequen the lettes are in the string and they get stored as the value and sorted
      times: Object.values(map).sort((a, b) => a - b),
    };
  }
}
