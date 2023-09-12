// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

function maxVowels(s, k) {
  let start = 0;

  let vowelSet = new Set(["a", "e", "i", "o", "u"]);
  let vowelCount = 0;
  let vowels = 0;

  for (let i = 0; i < s.length; i++) {
    if (i - start + 1 > k) {
      if (vowelSet.has(s[start])) vowels--;
      start++;
    }
    if (vowelSet.has(s[i])) {
      vowels++;
      vowelCount = Math.max(vowelCount, vowels);
    }
  }
  return vowelCount;
}
