const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };
  
  const jeff = personFactory('jeff', 27);
  
  console.log(jeff.name); // 'jeff'
  
  jeff.sayHello(); // calls the function and logs 'hello!'

//   /*/******** */
const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

console.log(name, color, number, food);
console.log({name, color, number, food});

// /*************/

console.clear();

let a = 17;
console.log(a);

const func = x => {
    let a = x;
    console.log(a);
}
func(99) 
console.log(a);