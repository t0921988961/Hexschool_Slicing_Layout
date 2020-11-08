console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

(()=>{
  console.log('Hello!');
})();


let a=[1,2,3,4];
let b=['a','b','c','d'];
let c=[...a,...b]
console.log('c:', c)

let d = a.reduce((old, current) => {
  return  current + old;
}, 0);

console.log('d:', d)
