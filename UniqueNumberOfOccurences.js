// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// use hash map/set

function uniqueOccurences(arr) {
  //create map and set
  let map = new Map();
  let set = new Set();

  //create map with array
  for (let e of arr) {
    if (map.has(e)) {
      map.set(e, map.get(e) + 1);
    } else {
      map.set(e, 1);
    }
  }

  //check if element in array is already in set
  for (let freq of map.values()) {
    if (set.has(freq)) return false;
    set.add(freq);
  }

  return true;
}
