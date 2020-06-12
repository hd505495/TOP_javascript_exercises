const removeFromArray = function() {
  let args = Array.from(arguments);
  let arr = args[0];
  for (let i = 1; i < arguments.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === args[i]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

module.exports = removeFromArray
