/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.
 * To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * const a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * const b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */
/*
 * Extra credit:
Make the method work for arrays that contain objects and/or arrays as elements.
*/
// eslint-disable-next-line no-extend-native
Array.prototype.isSubsetOf = function (target) {
  const uniqueArray = [...new Set(this)];
  let result = false;
  const obj = {};
  for (let i = 0; i < target.length; i++) {
    if (!obj[target[i]]) {
      if (typeof target[i] !== "object") {
        obj[target[i]] = target[i];
      }
    }
  }

  for (let i = 0; i < uniqueArray.length; i++) {
    if (obj[uniqueArray[i]]) {
      result = true;
    } else {
      return false;
    }
  }

  return result;
};

// const a = ["commit", "push"];
// console.log(a.isSubsetOf(["rebase", "push", "blame"]));

// const b = ["merge", "reset", "reset"];
// console.log(b.isSubsetOf(["reset", "merge", "add", "commit"]));

const c = [{ name: "f", age: 24 }, "reset", "reset"];
console.log(c.isSubsetOf(["reset", "merge", { name: "f", age: 24 }, "commit"]));
