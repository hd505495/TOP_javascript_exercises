const sumAll = function(a, b) {
  if ((a < 0) || (b < 0)) {
    return 'ERROR';
  }
  if ((typeof a != "number") || (typeof b != "number")) {
    return 'ERROR';
  }
  let final = 0;
  let low, hi;
  if (a < b) {
    low = a;
    hi = b;
  }
  else {
    low = b;
    hi = a;
  }
  for(let i = low; i <= hi; i++) {
    final += i;
  }
  return final;
}

module.exports = sumAll
