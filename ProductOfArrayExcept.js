// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

function productExcept(nums) {
  let forwardArr = [];
  let start = 1;

  //loop that starts from the left and multiplies as it goes
  for (let i = 0; i < nums.length; i++) {
    forwardArr.push(start);
    start = start * nums[i];
  }

  let result = [];
  let start2 = 1;

  //loop that starts from the right and multiplies as it goes
  for (let i = nums.length - 1; i >= 0; i--) {
    result.unshift(start2 * forwardArr[i]);
    start2 = start2 * nums[i];
  }

  return result;
}
