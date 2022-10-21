// creating modules> a function wraped in parentheses and called after.

// const nameFunction = (() => { return { }; })() 


const calculator = ( () => {

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

console.log(calculator.add(3, 4));
console.log(calculator.sub(3, 4));
console.log(calculator.mul(3, 4));
console.log(calculator.div(3, 4));
