// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k].
// If no such indices exists, return false.

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.

const nums = [1, 2, 3, 4, 5];

function increasingTriplet(nums) {
  if (nums === null || nums.length < 3) {
    return false;
  }

  let minOne = Number.MAX_SAFE_INTEGER;
  let minTwo = Number.MAX_SAFE_INTEGER;

  for (let num of nums) {
    if (num < minOne) {
      minOne = num;
    }
    if (num > minOne) {
      minTwo = Math.min(num, minTwo);
    }
    if (num > minTwo) {
      return true;
    }
  }
  return false;
}
