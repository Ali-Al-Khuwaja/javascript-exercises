const contains = function (object, target) {
  for (let key in object) {
    if (Object.is(object[key], target)) {
      return true;
    }

    if (object[key] instanceof Object) {
      if (contains(object[key], target)) {
        return true;
      }
    }
  }

  return false;
};
// Do not edit below this line
module.exports = contains;
