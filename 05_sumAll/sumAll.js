const sumAll = function(firstInt, secondInt) {
  if (
    firstInt < 0 || 
    secondInt < 0 ||
    typeof(firstInt) != 'number' ||
    typeof(secondInt) != 'number' 
  ) {
    return 'ERROR';
  }

  let sum = 0;
  if (firstInt > secondInt) {
    [firstInt, secondInt] = [secondInt, firstInt];
  }
    
  for (let i = firstInt; i <= secondInt; i++) {
      sum += i;
    }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
