const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const source2 = { b: 41, c: 34, g: 332}

console.log(target) // {a: 1, b: 2}
console.log(source)
console.log(source2)
/*the first variable in the object.assign >target here<  will
 receive all the items from other sources...
  . Object.assign(target, ...sources)
*/

const returnTarget = Object.assign(target, source, source2);
console.log(target) // {a: 1, b: 41, c: 34, g: 332}

console.log(returnTarget === target)

