const repeatString = function(str, times) {
  if (times < 0) {
    return 'ERROR';
  }

  let rpt = '';
  for (i = 0; i < times; i++) {
    rpt += str;
  }
  return rpt;
};

// Do not edit below this line
module.exports = repeatString;
