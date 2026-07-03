const permutations = function (arr) {
  if (arr.length === 0) return [[]];

  let result = [];
  for (let element of arr) {
    let cut = arr.filter((item) => item !== element); // create an array without element
    let combos = permutations(cut);
    for (let combo of combos) {
      result.push([element, ...combo]);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = permutations;
