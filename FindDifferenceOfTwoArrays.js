// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

function findDifference(nums1, nums2) {
  //create set of arrays
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  //compare if elementes in array are present in sets
  for (let num of nums1) {
    //if they are in the set delete them
    if (set2.has(num)) {
      set1.delete(num);
      set2.delete(num);
    }
  }
  //return new sets
  return [[...set1], [...set2]];
}
