/*
You have to create a function
that takes an array of integer number and returns the
second max in the array:
Note : using sort native is not allowed
Exanmples:
secondMax([1,5, 2])== 2
secondMax([-1, -5, 2])== -1
*/
const secondMax = function (array) {
  // TODO
  let arr = array;
  let maxNumber = Math.max(...arr);
  const indexOfmax = arr.indexOf(maxNumber);
  arr.splice(indexOfmax, 1);
  maxNumber = Math.max(...arr);
  return maxNumber;
};

// complexity is O(n)
