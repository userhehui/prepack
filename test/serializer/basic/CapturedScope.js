// serialized function clone count: 0
var f = function() {
  var i = 0;
  return function() {
    i += 1;
    return i;
  }
}

var g = [f(), f(), f(), f()];

inspect = function() { return g[0]() + " " + g[1]() + " " + g[2]() + " " + g[3](); }
