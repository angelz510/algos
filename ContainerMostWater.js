// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

function maxArea(height) {
  //set up pointers
  let left = 0;
  let right = height.length - 1;
  //this will store the area
  let maximum = 0;

  //while loop
  while (left < right) {
    //determine width by calcualating right minus left
    let width = right - left;
    //multiply width by height of two pointers
    let maxArea = Math.min(height[left], height[right]) * width;
    //determin area
    maximum = Math.max(maximum, maxArea);

    //increment left and right pointers
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maximum;
}
