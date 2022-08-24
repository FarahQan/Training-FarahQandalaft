/*
Create a function named "rotate" that takes an array and returns a new one
with the elements inside rotated n spaces.
If n is greater than 0 it should rotate the array to the right.
If n is less than 0 it should rotate the array to the left.
If n is 0, then it should return the array unchanged.
Examples:
Should work on arrays of any data types:
rotate(['a', 'b', 'c'], 1)     // => ['c', 'a', 'b']
rotate([1.0, 2.0, 3.0], 1)     // => [3.0, 1.0, 2.0]
rotate([true, true, false], 1) // => [false, true, true]
var data = [1, 2, 3, 4, 5];
rotate(data, 1) // => [5, 1, 2, 3, 4]
rotate(data, 2) // => [4, 5, 1, 2, 3] 5 4
rotate(data, 5) // => [1, 2, 3, 4, 5]
rotate(data, 0) // => [1, 2, 3, 4, 5]
rotate(data, -1) // => [2, 3, 4, 5, 1]
rotate(data, -2) // => [3, 4, 5, 1, 2]
rotate(data, -5) // => [1, 2, 3, 4, 5]
The rotation shouldn't be limited by the indices available in the array.
Meaning that if we exceed the indices of the array it keeps rotating.
rotate(data, 7)     // => [4, 5, 1, 2, 3]
rotate(data, 11)    // => [5, 1, 2, 3, 4]
rotate(data, 12478) // => [3, 4, 5, 1, 2]
*/

var data = [1, 2, 3, 4, 5];

const rotate = function (array, steps) {
  // n > 0 rotate to right
  //  n < 0 rotate to left
  // n = 0 unchanged
  let newArray = [];
  if (steps > 0) {
    if (steps > array.length) {
      steps = steps.toString();
      steps = steps[steps.length - 1];
      if (steps < 0) {
        steps = (steps - array.length) * -1;
      } else {
        steps = steps - array.length;
      }
    }
    for (let i = 1; i <= steps; i++) {
      newArray.unshift(array[array.length - i]);
    }
    newArray = [...newArray, ...array];
    let uniqueChars = [...new Set(newArray)];
    return uniqueChars;
  } else if (steps < 0) {
    if (steps * -1 > array.length) {
      steps = steps.toString();
      steps = steps[steps.length - 1];
      if (steps > 0) {
        steps = (steps - array.length) * -1;
      } else {
        steps = steps - array.length;
      }
    }
    for (let i = 0; i < -1 * steps; i++) {
      newArray.push(array[i]);
    }
    newArray = [...array.slice(steps * -1), ...newArray];
    return newArray;
  } else {
    return array;
  }
};
