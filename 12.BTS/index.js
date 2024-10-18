// //Blocking code
// console.log("start"); //1
// console.log("block") //2
// console.log("end"); //3

// //Non Blocking Code
// console.log('start')//1
// setTimeout(() => {
//     console.log("I'm Sceduled")
// }, 2000)//after 2second so final
// console.log('end')//2

import fs from "fs";

//without callback
console.log("start"); //1
const data = fs.readFileSync("data.txt");
console.log(data.toString());
console.log("end"); //3

//with calback
console.log("start"); //1
setTimeout(() => {
  const data = fs.readFile("data.txt", "utf-8", (error, data) => {
    error ? console.log(error) : console.log(data);
  });
  
}, 2000); //after 2second so final
console.log("end"); //2
