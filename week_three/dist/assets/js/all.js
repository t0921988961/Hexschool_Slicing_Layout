"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});

(function () {
  console.log('Hello!');
})();

var a = [1, 2, 3, 4];
var b = ['a', 'b', 'c', 'd'];
var c = [].concat(a, b);
console.log('c:', c);
var d = a.reduce(function (old, current) {
  return current + old;
}, 0);
console.log('d:', d);
//# sourceMappingURL=all.js.map
