const totalIntegers = function (data) {
  // Write a function that takes in an arbitrarily deep
  // array or object and returns the total number of integers
  // stored inside this array or object.

  // What is the smallest case?
  // What is the recursive case?
  // What value gets returned?
  // Who receives that returned value?
  let integerCounter = 0;
  if (typeof data === "function" || !(data instanceof Object)) {
    return undefined; // will exit on return
  }
  for (let element in data) {
    let value = data[element];
    if (Number.isInteger(value)) {
      integerCounter++;
    } else {
      if (value instanceof Object && typeof value !== "function") {
        integerCounter += totalIntegers(value);
      }
    }
  }
  return integerCounter;
};
// Do not edit below this line
module.exports = totalIntegers;
