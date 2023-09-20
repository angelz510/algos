// There is a biker going on a road trip.
// The road trip consists of n + 1 points at different altitudes.
// The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n).
// Return the highest altitude of a point.

function largestAltitude(gain) {
  //starting point bc the biker starts at 0
  const points = [0];

  //itirate through array
  for (let num of gain) {
    //push the sum of index in array and last item in the starting point into points
    points.push(num + points[points.length - 1]);
  }

  //return the highest number in the array
  return Math.max(...points);
}
