// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array.
// Return 0 if there is no such subarray.

function longestSubarray(nums) {
  let prev = 0;
  let current = 0;
  let max = 0;
  if (nums.every((x) => x === 1)) {
    return nums.length - 1;
  }
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const next = num[i + 1];
    if (num === 1) {
      current += 1;
      max = Math.max(max, prev + current);
    } else if (num === 0) {
      max = Math.max(prev + current, max);
      if (next === 0) {
        prev = 0;
        current = 0;
      } else {
        prev = current;
        current = 0;
      }
    }
  }
  return max;
}
