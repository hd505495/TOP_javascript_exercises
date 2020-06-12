const ftoc = function(f) {
  let c = (f - 32) * (5/9);
  let c2 = c.toFixed(1);
  let c3 = parseFloat(c2);
  return c3;
}

const ctof = function(c) {
  let f = (c * (9/5)) + 32;
  let f2 = f.toFixed(1);
  let f3 = parseFloat(f2);
  return f3;
}

module.exports = {
  ftoc,
  ctof
}
