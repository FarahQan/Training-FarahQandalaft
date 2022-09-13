// ----------
// Day-4 : Tue 21 Aug - Code Challange Number 3 - flattened
// ----------
/*
For this exercise you will create a flatten function.
The function takes in any number of arguments and
flattens them into a single array.
If any of the arguments passed
in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments.
Any nested arrays, no matter how deep,
should be flattened into the single array result.
The following are examples of how this function would be used
and what the expected results would be:
flatten([1, [2, 3], 4, 5, [6, 7]])
// returns [1, 2, 3, 4, 5, 6, 7]
flatten(['a', ['b', 2], 3, null, [4, 'c']])
// returns ['a', 'b', 2, 3, null, 4, 'c']
*/
const flatten = (arr) => {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object" && arr[i] !== null) {
      flatArray = [...flatArray, ...arr[i]];
    } else {
      flatArray = [...flatArray, arr[i]];
    }
  }
  return flatArray;
};

// time complexity = O(n)

describe("Flatten", () => {
  describe("When flatten function is called with multidimensional array ", () => {
    it("shoud return flattened array", () => {
      const newArray = flatten([1, [2, 3], 4, 5, [6, 7]]);
      console.log(newArray);
      expect(newArray).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    });
    it("shoud return flattened array and null value for string passed in", () => {
      const newArray = flatten(["a", ["b", 2], 3, null, [4, "c"]]);
      console.log(newArray);
      expect(newArray).toStrictEqual(["a", "b", 2, 3, null, 4, "c"]);
    });
  });
});
