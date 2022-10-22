const Formatter = (function() {
    let yearNow = new Date();
    const log = (message) => console.log(`[${yearNow.getFullYear()}_${yearNow.getMonth()}_${yearNow.getDay()}] Logger: ${message}`);
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      return text.toUpperCase();
    };
  
    const writeToDOM = (selector, message) => {
      document.querySelector(selector).innerHTML = message;
    }
    const makeLowerCase = (text) => {
        log("Making uppercase");
        return text.toLowerCase();
      };
    

    return {
      makeUppercase,
      writeToDOM,
      makeLowerCase,
    }
  })();
  
  Formatter.writeToDOM(".target", "Hi there");
  Formatter.writeToDOM(".target2", Formatter.makeLowerCase("TO SMALL CASE"));


