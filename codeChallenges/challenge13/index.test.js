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
  let result = false;
  const obj = {};

  for (let i = 0; i < target.length; i++) {
    if (typeof target[i] !== "object") {
      if (!obj[target[i]]) {
        obj[target[i]] = target[i];
      }
    } else {
      if (!obj[JSON.stringify(target[i])]) {
        obj[JSON.stringify(target[i])] = target[i];
      }
    }
  }

  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] !== "object") {
      if (!obj[this[i]]) {
        return false;
      } else {
        result = true;
      }
    } else {
      if (!obj[JSON.stringify(this[i])]) {
        return false;
      } else {
        result = true;
      }
    }
  }

  return result;
};


