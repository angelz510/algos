// Given an array of integers `nums` which is sorted in ascending order, and an integer `target`,
// write a function to search `target` in `nums`.
// If `target` exists, then return its index. Otherwise, return `-1`.

// You must write an algorithm with `O(log n)` runtime complexity.

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1; // right is - 1 because length and index lenght is not the same

  while (left <= right) {
    // white 0 - 5
    let mid = left + Math.floor((right - left) / 2); // mid = 0 + (5 - 0) = 5/2 = 2
    if (nums[mid] === target) {
      // if num[2] === 9
      return mid; // return 2
    } else if (nums[mid] < target) {
      // nums[2] = 3 < 9
      left = mid + 1; // left = 3 - 1 = 2
    } else {
      right = mid - 1; // right = 3 + 1 = 4
    }
  }
  return -1;
}
