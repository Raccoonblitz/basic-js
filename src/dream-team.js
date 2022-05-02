const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  var dT = '';
  for (i = 0; i < members.length; i++)
    if (typeof members[i] === 'string') {
      var dTmem = members[i].replace(/\s/g, '')
      dT += dTmem[0];
    } 
  var dTname = dT.toUpperCase().split('').sort().join('');
  if (dTname === '') {
    return false;
  } else {
    console.log(dTname)
    return dTname;
  }
}

module.exports = {
  createDreamTeam
};
