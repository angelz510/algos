// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left.
// This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

function pivotIndex(nums) {
  //variable to save array sum
  let totalSum = 0;

  //itirate through array to find the sum of numbers in array
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  //variable to save sum from left side
  let leftSum = 0;

  //itirate though array and determine right sum of array
  for (let i = 0; i < nums.length; i++) {
    //operation to determine right sum
    let rightSum = totalSum - nums[i] - leftSum;
    //compare left and right sum
    if (rightSum === leftSum) {
      //if both sides are the same, return index
      return i;
    }
    //move along on the left
    leftSum += nums[i];
  }
  //if no pivot exist, return -1
  return -1;
}
