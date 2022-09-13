/*
You have to create a function
that takes a positive integer number and returns the
next bigger number formed by the same digits:
Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:
nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/
const nextBigger = function (num) {
  let currentValue = num.toString().split("");
  for (let i = currentValue.length - 1; i > 0; i--) {
    [currentValue[i], currentValue[i - 1]] = [
      currentValue[i - 1],
      currentValue[i],
    ];
    if (parseInt(currentValue.join("")) > num) {
      return parseInt(currentValue.join(""));
    } else if (parseInt(currentValue.join("")) < num && i == 1) {
      i = currentValue.length;
    }
  }
  return -1;
};

// i think complexity is O(n^2)
