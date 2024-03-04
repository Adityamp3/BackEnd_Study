const myDate = new Date();
// console.log(myDate);
// console.log();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toUTCString());
// console.log(myDate.toTimeString());
// console.log();

// let myCreatedDate = new Date(2003, 5, 3, 18, 4, 45);
// let myCreatedDate = new Date("1-28-2004")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(`${Math.floor(myTimeStamp/1000)} s`);
let newDate = new Date();
newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate);