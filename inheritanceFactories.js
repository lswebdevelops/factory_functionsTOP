const Person = (name) => {
    const sayName = () => document.querySelector('.p1').innerHTML = `my name is ${name}`;
    return {sayName};
  }

  const Nerd = (name) => {
    // simplycfreate a person and pull out the sayName function with destructuring assignment syntax!
    const {sayName}= Person(name);
    const doSomethingNerdy = ()=> document.querySelector('.p2').innerHTML ='nerd stuff';
    return {sayName, doSomethingNerdy};

  }


  const jeff = Nerd('jeff');

  jeff.sayName();
  jeff.doSomethingNerdy();