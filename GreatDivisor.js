// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

function gcdOfStrings(str1, str2) {
  // getting length of strings
  let ls1 = str1.length;
  let ls2 = str2.length;

  // if string1 and string 2 combined do not equal each other return empty string
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  // takes two lengths num1 and num2
  let gcd = function (num1, num2) {
    // if theres no num2 return num1
    if (!num2) return num1;
    // otherwise
    return gcd(num2, num1 % num2);
  };

  let div = gcd(ls1, ls2);
  return str1.slice(0, div);
}
