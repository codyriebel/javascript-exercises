/*const removeFromArray = function(array, ...values) {
  for (val of values) {
    if (array.includes(val)) {
      const index = array.indexOf(val);
      array.splice(index, 1);
    }
  }
  return array;
};
*/

const removeFromArray = (array, ...values) => 
  array.filter(val => !values.includes(val))

// Do not edit below this line
module.exports = removeFromArray;
