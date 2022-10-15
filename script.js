// Create a tic tac toe game

let showX = document.querySelectorAll('.container div');
let one = showX[0]
let two = showX[1]
let three = showX[2]
let four = showX[3]
let five = showX[4]
let six = showX[5]
let seven = showX[6]
let eight = showX[7]
let nine = showX[8]



one.addEventListener('click', function change2O(){
one.style.color = 'blue';
one.textContent = 'x'


})
two.addEventListener('click', function change2O(){
    two.textContent ='x'
    two.style.color = 'blue';
    
    })
three.addEventListener('click', function change2O(){
    three.textContent ='x'
    three.style.color = 'blue';
})
four.addEventListener('click', function change2O(){
four.style.color = 'blue';
four.textContent ='x'
})
five.addEventListener('click', function change2O(){
five.style.color = 'blue';
five.textContent ='x'

})

six.addEventListener('click', function change2O(){
six.style.color = 'blue';
six.textContent ='x'

})
seven.addEventListener('click', function change2O(){
seven.style.color = 'blue';
seven.textContent ='x'
})
eight.addEventListener('click', function change2O(){
eight.style.color = 'blue';
eight.textContent ='x'

})
nine.addEventListener('click', function change2O(){ 
nine.style.color = 'blue';
nine.textContent ='x'
})


// avoiding double click selection:


one.addEventListener('mousedown', function(e){
    if (e.detail > 1){
        e.preventDefault();
       
    }
});
two.addEventListener('mousedown', function(e){
    if (e.detail > 1){
        e.preventDefault();
    }
});
three.addEventListener('mousedown', function(e){
    if (e.detail > 1){
        e.preventDefault();
    }
});
four.addEventListener('mousedown', function(e){
    if (e.detail > 1){
        e.preventDefault();
    }
});
five.addEventListener('mousedown', function(e){
    if (e.detail > 1){
        e.preventDefault();
    }
});
six.addEventListener('mousedown', function(e){
    if (e.detail > 1){
        e.preventDefault();
    }
});
seven.addEventListener('mousedown', function(e){
    if (e.detail > 1){
        e.preventDefault();
    }
});
eight.addEventListener('mousedown', function(e){
    if (e.detail > 1){
        e.preventDefault();
    }
});
nine.addEventListener('mousedown', function(e){
    if (e.detail > 1){
        e.preventDefault();
    }
});

// adding O to the div with doble click
    one.addEventListener('dblclick', function change2O(){
        one.style.color = 'green';
        one.textContent = 'o'
    })
    two.addEventListener('dblclick', function change2O(){
        two.style.color = 'green';
        two.textContent ='o'
    })
    three.addEventListener('dblclick', function change2O(){
    three.style.color = 'green';
    three.textContent ='o'
    })
    four.addEventListener('dblclick', function change2O(){
    four.style.color = 'green';
    four.textContent ='o'
    })
    five.addEventListener('dblclick', function change2O(){
    five.style.color = 'green';
    five.textContent ='o'
    })
    six.addEventListener('dblclick', function change2O(){
    six.style.color = 'green';
    six.textContent ='o'
    })
    seven.addEventListener('dblclick', function change2O(){
    seven.style.color = 'green';
    seven.textContent ='o'
    })
    eight.addEventListener('dblclick', function change2O(){
    eight.style.color = 'green';
    eight.textContent ='o'
    })
    nine.addEventListener('dblclick', function change2O(){ 
    nine.style.color = 'green';
    nine.textContent ='o'
    })
    


    // let showX = document.querySelectorAll('.container div');
    // let one = showX[0]
    // let two = showX[1]
    // let three = showX[2]
    // let four = showX[3]
    // let five = showX[4]
    // let six = showX[5]
    // let seven = showX[6]
    // let eight = showX[7]
    // let nine = showX[8]

// for(var i=0; i<showX.length;i++){
//   if(showX[i].textContent === "x"){
//    console.log(showX[i]);
//   }
// }
