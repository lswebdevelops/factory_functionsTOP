const FactoryFunction = string=> {
    const capitalizeString = () => string.toUpperCase();
    const printString = ()=> console.log(`---${capitalizeString()}---`);
    return { printString , capitalizeString};
}

const taco = FactoryFunction('taco');

//printString();// ERROR!!

// capitalizeString();// ERROR!!
 taco.capitalizeString();// ERROR!!
taco.printString();


const FactoryFunction2 = integer=> {
    const doubleInteger = () => integer * 2;
    const printInteger = ()=> console.log(`The double of ${integer} is ${doubleInteger()}.`);
    return { printInteger };
}

const double = FactoryFunction2(4);

double.printInteger();
 // counter creator 

 const counterCreator = () => {
    let count = 0;
    return () => {
        console.log(count);
        count ++;
    };
 };
 const counter = counterCreator();
 counter();
 counter();
 counter();
 counter();
 counter();
 counter();


