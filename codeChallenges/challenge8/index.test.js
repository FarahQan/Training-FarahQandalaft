/**
 * Write a function that takes an integer as input,
 * and returns the number of bits
 * that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 */
const bitCounting = (num) => {
  // TODO

  if (num == 0) {
    return 0;
  }
  return (num % 2) + bitCounting(Math.floor(num / 2));
};

console.log(bitCounting(1234));
