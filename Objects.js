// SINGLETON
// koi bhi constructor(Object.create) se aap banate hai toh singleton banta hai
// par jab bhi object literals({}) ya kisi aur tarah se banate hai toh singleton nhi banta

//Object Literals

const mySym = Symbol("key1");
const JsUser = {
    name: "Aditya Raj Lodhi",
    "kuch kaho" : "Sangati achi ho toh kaam bhi ache hote hai",
    goal: "Full Stack Developer",
    email: "aditya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"],
    [mySym]: "mykey1"
};
// console.log(JsUser["kuch kaho"]);
// console.log(JsUser[mySym]);


JsUser.name = "Abhinav";
// Object.freeze(JsUser);
JsUser.goal = "SUUUUUUUUUUU";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello ${this.name}, How are you today?`);
}
// JsUser.greeting();
// console.log(JsUser);

const singleton = Object("SaAmbaSadaShiv");
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = Object.assign({}, obj1, obj2);

// console.log(singleton);
// console.log(obj3);

// console.log(Object.keys(JsUser));
// console.log(Object.values(JsUser));
// console.log(Object.entries(JsUser));
// console.log(JsUser.hasOwnProperty('isLoggedIn'));

const course = {
    subject: "HTML",
    price: 999,
    instructor: "Ram"
}
// console.log(course.price);

// const {price} = course;
// console.log(print);

const {price : pp} = course;
console.log(pp); 