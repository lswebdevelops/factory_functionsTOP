const Formatter = (function() {
    let yearNow = new Date();
    const log = (message) => console.log(`[${yearNow.getFullYear()}_${yearNow.getMonth()}_${yearNow.getDay()}] Logger: ${message}`);
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      return text.toUpperCase();
    };  
  
    return {
      makeUppercase,
    }
  })();


  console.log(Formatter.makeUppercase("To upper case"));