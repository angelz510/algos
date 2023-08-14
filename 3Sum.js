// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Similar approach to 2 numbs.
// 2 point technique
// setup solution, left, right
// sort array
// you have i, j ,k
// i is at 0
// j is at 1
// k is at the end of array

function threeSum(nums) {
  // if theres nothing in the array return []
  if (nums.length === 0) return [];

  // sort the arrary
  nums = nums.sort((a, b) => a - b);
  // res is the result
  let res = [];
  // minus 2 because there are two values j and k
  for (let i = 0; i < nums.length - 2; i++) {
    // stop duplicates from occuring by nums[i] is = to nums[i - 1]
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // mode j to the right of i
    let j = i + 1;
    // move endpoint to the left
    let k = nums.length - 1;

    // while k is bigger than j. k is at the end of sorted array
    while (j < k) {
      // sum will be i + j + k
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        // if the sum is 0 push those indices to the result
        res.push([nums[i], nums[j], nums[k]]);
        // stop duplicates
        // while index j = j + 1; move on to the next
        while (nums[j] === nums[j + 1]) j++;
        // while index k = k + 1; decrease
        while (nums[k] === nums[k + 1]) k--;
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
}
