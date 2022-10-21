// const Formatter = (function() {
//     let timesRun = 0;
  
//     const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
//     const setTimesRun = () => { 
//       log("Setting times run");
//       ++timesRun;
//     }
  
//     const makeUppercase = (text) => {
//       log("Making uppercase");
//       setTimesRun();
//       return text.toUpperCase();
//     };
  
//     return {
//       makeUppercase,
//       timesRun,
//     }
//   })();

//   console.log(Formatter.makeUppercase('to upper case'));
//   console.log(Formatter.timesRun);

// Formatter.timesRun = 133;
//   console.log(Formatter.timesRun);

const Formatter = (function() {
    let yearNow = new Date();
    const log = (message) => console.log(`[${yearNow.getFullYear()}_${yearNow.getMonth()}_${yearNow.getDay()}] Logger: ${message}`);
    const timesRun = ["\nthat was the first"];
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      timesRun.push("\none more added later");
      return text.toUpperCase();
    };
  
    return {
      makeUppercase,
      timesRun,
    }
  })();
  
  console.log(Formatter.makeUppercase("to upper case"));
  console.log(Formatter.makeUppercase("to upper case"));
  console.log(Formatter.makeUppercase("to upper case"));
  console.log(`Variable "timesRun" length: ${Formatter.timesRun.length}`);
  console.log(Formatter.timesRun[0]);
  console.log(Formatter.timesRun[1]);
  console.log(Formatter.timesRun[2]);
  console.log(Formatter.timesRun[3]);



