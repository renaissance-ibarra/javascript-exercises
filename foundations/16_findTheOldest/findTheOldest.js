function getAge (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

function getOldest (oldest, currentPerson) {
  let oldestAge = getAge(
    oldest.yearOfBirth, oldest.yearOfDeath
  );
  let currentAge = getAge(
    currentPerson.yearOfBirth, currentPerson.yearOfDeath
  );
  return oldestAge < currentAge ? currentPerson : oldest;
}

const findTheOldest = function (array) {
  return array.reduce(getOldest);
};

// Do not edit below this line
module.exports = findTheOldest;
