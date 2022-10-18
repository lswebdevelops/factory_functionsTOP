(function () {
    var myFunction = function () {
      // do some stuff here\
    console.log('private');
   return myFunction();
    };
  })();

// define module
var Module = (function () {
    return {
      myMethod: function () {
        console.log('myMethod has been called.');
      }
    };
  })();
  
  // call module + methods
  Module.myMethod();



  // define module
var Module = (function () {
    return {
      myMethod: function () {
  
      },
      someOtherMethod: function () {
  
      }
    };
  })();
  
  // call module + methods
  Module.myMethod();
  Module.someOtherMethod();