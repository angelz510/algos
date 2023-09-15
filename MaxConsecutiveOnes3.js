// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

function longestOnes(nums, k) {
  let start = 0;
  let maxCount = 0;
  let currentCount = 0;
  let flip = k;

  for (let i = 0; i < nums.length; i++) {
    let currentChar = nums[i];
    if (currentChar === 1) {
      currentCount += 1;
    } else if (currentChar === 0 && flip > 0) {
      flip -= 1;
      currentCount += 1;
    } else {
      maxCount = Math.max(maxCount, currentCount);
      i = start;
      start += 1;
      flip = k;
      currentCount = 0;
    }
  }

  return Math.max(maxCount, currentCount);
}
