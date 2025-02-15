const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let str = String(n).split('').map(Number)
  return Math.max(...str.map(function (el, i) {
      let lstr = str.slice();
      lstr.splice(i, 1);
      return Number(lstr.join(''))
  }))
}

module.exports = {
  deleteDigit
};
