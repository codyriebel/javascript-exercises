const findTheOldest = function(people) {
  return people.reduce((oldest, current) => {
    if (!oldest.yearOfDeath) {
      oldest.yearOfDeath = new Date().getFullYear();
    }
    return (oldest.yearOfDeath - oldest.yearOfBirth) > (current.yearOfDeath - current.yearOfBirth) ? oldest : current;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
