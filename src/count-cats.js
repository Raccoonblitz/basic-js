const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */


function countCats(backyard) {
  counterCats = 0;
  var Csk;
  for (i = 0; i < backyard.length; i++) {
 
    for (j = 0; j < backyard[i].length; j++)
    {
      Csk = backyard[i][j];
      if (Csk === '^^') {
        counterCats++;
      } 
    }
  }

 return(counterCats);
}

module.exports = {
  countCats
};
