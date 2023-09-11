// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
// Any answer with a calculation error less than 10-5 will be accepted.

function findMaxAverage(nums, k) {
  let max = -Infinity;
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end - nums.length; end++) {
    currentSum += nums[end];

    if (end - start === k - 1) {
      let average = currentSum / k;
      max = Math.max(max, average);
      currentSum -= nums[start];
      start++;
    }
  }
  return max;
}
