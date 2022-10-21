const calculator = (()=>{
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return{
        add, 
        sub,
        mul,
        div,
    };
})();


console.log(calculator.add(2,3));
console.log(calculator.mul(2,3));
console.log(calculator.sub(2,3));
console.log(calculator.div(2,3));


const fooFunction =(() =>{
    var foo = ()=> "bar";
    
    return{foo}
})();
console.log(fooFunction.foo())



const test2 = (()=>{
    const test23 = () => 'word'
    return{
        test23
    };
})()

console.log(test2.test23());


// other way of calling a module function: 
var foo = "foo";

(function (innerFoo) {
    // Outputs: "foo"
    console.log(innerFoo);
})(foo);

