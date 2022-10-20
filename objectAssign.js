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


// cloning an object


            const obj = { a: 1 };
            const copy = Object.assign({}, obj)

            console.log(copy)

            // the function above: 
            const notaTarget1 = { a: 1, b: 2 };
            const source1 = { b: 4, c: 5 };
            const source3 = { b: 41, c: 34, g: 332}

            console.log(notaTarget1) // {a: 1, b: 2}
            console.log(source1)
            console.log(source3)
            /*the first variable in the object.assign >target here<  will
            receive all the items from other sources...
            . Object.assign(target, ...sources)
            */

            const returnTarget1 = Object.assign({}, notaTarget1, source2, source3);
            console.log(returnTarget1)// {a: 1, b: 41, c: 34, g: 332}
            console.log(notaTarget1) // {a: 1, b: 2}

            console.log(returnTarget1 === notaTarget1) // false

console.clear();

const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: 0, b: { c: 0 } }

obj1.a = 1;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 0, b: { c: 0 } }

obj2.a = 2;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 2, b: { c: 0 } }

obj2.b.c = 3;
console.log(obj1); // { a: 1, b: { c: 3 } }
console.log(obj2); // { a: 2, b: { c: 3 } }

// deep clone 
const obj3 = { a:0, b: {c:0}};
const obj4 = JSON.parse(JSON.stringify(obj3));
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }


// merging objects
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj5 = Object.assign(o1, o2, o3);
console.log(obj5); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.

//Merging objects with same properties
const o11 = { a: 1, b: 1, c: 1 };
const o21 = { b: 2, c: 2 };
const o31 = { c: 3 };

const obj11 = Object.assign({}, o11, o21, o31);
console.log(obj11); // { a: 1, b: 2, c: 3 }


