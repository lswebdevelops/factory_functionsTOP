//  // All function and variables are scoped to this function

// let myModule = (function(){
//     'use strict';
//     return{
//         publicMethod: function(a){
//             console.log('Hello World!');
//         }
//     };
// })();

// myModule.publicMethod();//Hello World!

// Private methods & properties
// var myModule = (function() {
//     'use strict';
  
//     var _privateProperty = 'Hello World';
  
//     function _privateMethod() {
//       console.log(_privateProperty);
//     }
  
//     return {
//       publicMethod: function() {
//         _privateMethod();
//       }
//     };
//   })();
  
//   myModule.publicMethod(); // outputs 'Hello World'
//   console.log(myModule._privateProperty); // is undefined protected by the module closure
//   myModule._privateMethod(); // is TypeError protected by the module closure

var myModule = (function() {
    'use strict';
  
    var _privateProperty = 'Hello World';
    var publicProperty = 'I am a public property';
  
    function _privateMethod() {
      console.log(_privateProperty);
    }
  
    function publicMethod() {
      _privateMethod();
    }
  
    return {
      publicMethod: publicMethod,
      publicProperty: publicProperty
    };
  })();
  
  myModule.publicMethod(); // outputs 'Hello World'
  console.log(myModule.publicProperty); // outputs 'I am a public property'
  console.log(myModule._privateProperty); // is undefined protected by the module closure
  myModule._privateMethod(); // is TypeError protected by the module closure