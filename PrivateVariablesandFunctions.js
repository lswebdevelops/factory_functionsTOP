const FactoryFunction = string=> {
    const capitalizeString = () => string.toUpperCase();
    const printString = ()=> console.log(`---${capitalizeString()}---`);
    return { printString };
}

const taco = FactoryFunction('taco');

//printString();

// capitalizeString();
// taco.capilalizeString();
taco.printString();


const FactoryFunction2 = integer=> {
    const doubleInteger = () => integer * 2;
    const printInteger = ()=> console.log(`The double of ${integer} is ${doubleInteger()}.`);
    return { printInteger };
}

const double = FactoryFunction2(4);

double.printInteger();
