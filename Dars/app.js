console.log("Hello");

// // setTimeOut  = bir marotabalik chaqiruv ucun
// setTimeout(() => {
//   document.querySelector("body").innerHTML += "<h1>setTimeOut</h1>";
// console.log("Set time out!");
// }, 3000);

// // setInterval  = bir marotabalik chaqiruv ucun
// setInterval(() => {
//   document.querySelector("body").innerHTML += "<h1>setInterval</h1>";
//   console.log("setInterval");
// }, 3000);

// setInterval(() => {
//   document.querySelector("body").innerHTML += "<br/>" + date;
//   console.log("setInterval");
// }, 1000);
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date = new Date();

let text1 = document.querySelector("h1:nth-child(1)");
let text2 = document.querySelector("h1:nth-child(2)");
let text3 = document.querySelector("h1:nth-child(3)");

text1.innerHTML = date.getDate();
text2.innerHTML = date.getFullYear();

let d = date.getMonth();
text3.innerHTML = month[d];
