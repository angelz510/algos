// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// As you go through array save things youve seen before.

function containsDuplicate(nums) {
  // Create a memory (hash, table)
  let memory = {};
  // itirate through array
  for (i = 0; i < nums.length; i++) {
    // if element is new put it in memory
    if (memory[nums[i]] === undefined) {
      memory[nums[i]] = "num";
    } else {
      // if element exist in memory return true
      return true;
    }
  }
  return false;
}
// TC = O(N) We go through the array once
// SC = O(N)

// Solution #2
function containsDupeplicates(nums) {
  //sort and check
  nums.sort((a, b) => {
    return a - b;
  });
  for (i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) return true;
  }
  return false;
}
