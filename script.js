const personFactory = (name, age) => {
    const sayHello = () => console.log('hello');
    const sayBye =() => 'Bye bye';
    const addX = () => 'X';
    const addO =() => 'O';
    //new way:
    return{ name, age, sayHello , sayBye, addX, addO};
    // old way: 
    //return {name: name, age: age, sayHello: sayHello, sayBye: sayBye};
};

const jeff = personFactory('jeff', 27);

// document.getElementById('p1').innerText= jeff.name;
// document.getElementById('p2').innerText = jeff.sayBye();



// adding button x
 
const childP = document.getElementById('h1');

const childP3 = document.createElement('hr');
const childP4 = document.createElement('button');

childP4.classList.add('btnClass');
childP.appendChild(childP3);
childP.appendChild(childP4).style.width = "150px";
childP4.style.height = '35px';
childP4.style.backgroundColor = 'green';
childP4.style.color = 'white';
childP4.style.border = 'none';

// adding button o
 
const childPO = document.getElementById('h2');
// no hr
const childP4O = document.createElement('button');

childP4O.classList.add('btnOClass');
childPO.appendChild(childP4O).style.width = "150px";
childP4O.style.height = '35px';
childP4O.style.backgroundColor = 'green';
childP4O.style.color = 'white';
childP4O.style.border = 'none';


document.querySelector('.btnClass').innerText = "X"
document.querySelector('.btnOClass').innerText = "O"

//adding x paragrath
let addBtn2 = document.querySelector('.btnClass');
 addBtn2.addEventListener('click',function addX(){
    const childP = document.getElementById('h1');
    const childP3 = document.createElement('p');
    childP3.classList.add('testClass');
    childP.appendChild(childP3);
    document.querySelector('.testClass').innerText = jeff.addX();
});

//adding o paragrath
let addBtn2O = document.querySelector('.btnOClass');
addBtn2O.addEventListener('click',function addO(){
    const childPO = document.getElementById('h2');
    const childP3O = document.createElement('p');
    childP3O.classList.add('testClassO');
    childPO.appendChild(childP3O);
    document.querySelector('.testClassO').innerText = jeff.addO();
});


