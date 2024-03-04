const myArr = ["IronMan", "Batman", "Superman"]; console.log();
myArr.push("Black Panther");
myArr.unshift("Hulk");
// console.log(myArr);
// console.log(myArr.join())


const yourArr = new Array(51, 69, 101, 108, 786);
// console.log(yourArr.indexOf("sdf"));
// console.log(yourArr.includes("786"));
// console.log(yourArr.join()); console.log();


const herArr = [10, 20, 30, 40, 50, 60];
// console.log(herArr.slice(1, 4));
// console.log(`Real Array = ${herArr}`);
// console.log(herArr.splice(1,4));
// console.log(`Real Array ${herArr}`); console.log();

const marvel_heros = ["IronMan", "Hulk", "Thor"];
const dc_heros = ["Batman", "Superman", "Flash"];
const boys = ["Aditya", "Anil", "Ayush"];
const girls = ['Sneha', 'Riya', 'Muskan'];

const human = boys.concat(girls);
marvel_heros.push(dc_heros);

const people = [...boys, ...girls];

// console.log(`Using push() : `, marvel_heros);
// console.log(`Using concat() : `, human);
// console.log(`Using spread operator : `, people);



const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10], 11, [12, 13]];
const usable_another_array = another_array.flat(Infinity);
// console.log(usable_another_array);


var1 = 100;
var2 = 200;
var3 = 400;
var4 = 800;
// console.log(Array.isArray("Aditya Raj Lodhi"));
// console.log(Array.from("Aditya Raj"));
// console.log(Array.from({name : "Hitesh"})); //intresting & important for interviews (have to deal with it in industry and real world projects)
// console.log(Array.of("Shobha Lodhi"));
// console.log(Array.of(var1, var2, var3, var4));