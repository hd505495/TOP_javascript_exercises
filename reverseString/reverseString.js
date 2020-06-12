const reverseString = function(string) {
  let revString = '';
  let revArray = [];
  for (let j = 0; j < string.length; j++) {
    revArray[j] = string[j];
  }
  for (let i = 0; i < string.length; i++) {
    let x = revArray.pop();
    revString += x;
  }
  return revString;
}

module.exports = reverseString
