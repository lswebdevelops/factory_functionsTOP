// use strict
(function() {
    'use strict';
    console.log("test");
    // All function and variables are scoped to this function
  })();

let myModule = (function(){
    'use strict';
    console.log('printing strict');
})();
