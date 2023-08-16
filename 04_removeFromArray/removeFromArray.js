const removeFromArray = function(array, ...values) {
  for (val of values) {
    if (array.includes(val)) {
      const index = array.indexOf(val);
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
