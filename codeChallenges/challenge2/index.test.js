// ----------
// Day-3 : Tue 19 Aug - Code Challange Number 2 - factorial
// ----------
// Good Morning Mates, This is the second code challange to do..
/**
 * The factorial of a number is the product of all the numbers from 1 to that number. For example,
 * factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.
 * The factorial of a positive number n is given by:
 * factorial of n (n!) = 1 * 2 * 3 * 4.....n
 * Write a function that, given a number, returns a factorial of the number
 */
function factorial(number) {
  // TO DO
  let factorialNumber = 1;
  if (number == 0 || number == 1) return 1;
  for (let i = 1; i <= number; i++) {
    factorialNumber *= i;
  }
  return factorialNumber;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(11));

// describe("Tests", () => {
//   it("test factorial", () => {
//     expect(factorial(0)).toEqual(1);
//     expect(factorial(1)).toEqual(1);
//     expect(factorial(5)).toEqual(120);
//     expect(factorial(6)).toEqual(720);
//     expect(factorial(11)).toEqual(39916800);
//   });
// });
