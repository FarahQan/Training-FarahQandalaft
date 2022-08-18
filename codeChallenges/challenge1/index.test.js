// ----------
// Day-2 : Tue 17 Aug - Code Challange Number 1 - getUniqueValues
// ----------
// TODAY'S code challange problem <getUniqueValues>
/**
 * Given a single input array, write a function that outputs an unique array of values
 *
 *
 * What time complexity is your solution?
 *
 * Your solution shouldn't using any build in function.
 *
 * Credit: Write a unit tests.
 */
/**
 * example usage:
 * const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
 * console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]
 */
const arrOfNum = [1, 2, 2, 4, 5, 6, 6]
const getUniqueValues = (arrOfNum) => {
  // TO DO
  // object ot save unique values
  // array that have the unique value if they are not exist in the object
  // for loop

  // we should consider if we have zero in the array so we compare with undefined

  const uniqueNubmers = {}
  const arrayOfUniques = []
  for (let i = 0;i < arrOfNum.length;i++) {
    if (uniqueNubmers[arrOfNum[i]] === undefined) {
      uniqueNubmers[arrOfNum[i]] = 1
      arrayOfUniques.push(arrOfNum[i])
    }
  }
  return arrayOfUniques

  describe("Tests", () => {
    it("test factorial", () => {
      expect(getUniqueValues(arrOfNum)).toEqual([1, 2, 4, 5, 6])
    })
  })

}
// this solution is O(n)
console.log(getUniqueValues(arrOfNum)) // [1, 2, 4, 5, 6]
