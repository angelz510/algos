// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

var isValid = function (s) {
  // create stack to push elements from string
  let stack = [];
  // itirate through string
  for (let i = 0; i < s.length; i++) {
    // extract elements from string into a variable
    let char = s[i];
    // check if variable is one of the parenthesis
    if (char === "(" || char === "{" || char === "[") {
      //if it is push it into the stack
      stack.push(char);
    } else {
      // extract previous char from stack
      let prevChar = stack.pop();
      // if previous char is ...
      if (prevChar === "(" && char !== ")") return false;
      if (prevChar === "{" && char !== "}") return false;
      if (prevChar === "[" && char !== "]") return false;
      if (prevChar === undefined) return false;
    }
  }
  // edge case if stack is all open brackets
  return stack.length === 0;
};
