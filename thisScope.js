var myFunction = function () {
  console.log(this); // this = global, [object Window]
};
myFunction();

var myObject = {};
myObject.myMethod = function () {
  console.log(this); // this = Object { myObject }
};

// var nav = document.querySelector('.nav'); // <nav class="nav">
// var toggleNav = function () {
//   var that = this;
//   console.log(that); // <nav> element
//   setTimeout(function () {
//     console.log(that); // <nav> element
//   }, 1000);
// };
// console.clear();
// nav.addEventListener('click', toggleNav, false);


var links = document.querySelectorAll('nav li');
for (var i = 0; i < links.length; i++) {
  console.log(this); // [object Window]
}

console.log("now the call()");
// using the call() scope

var links2 = document.querySelectorAll('nav li');
for (var i = 0; i < links2.length; i++) {
  (function () {
    console.log(this);
  }).call(links2[i]);
}