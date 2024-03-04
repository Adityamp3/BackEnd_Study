var c = 300;
let a = 100;
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(c);
// console.log(a);


// Jaise agar bacha kisi badde se ice-cream mange toh chalta hai, par agar koi bada bachche se mange toh nhi... vaise hi
// child parent ke variables access kar sakta hai par parent child ke nhi.
function one(){
    const username = "Aditya"

    function two(){
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()



// **********************INTRESTING*************************

addOne(2)
function addOne(num){
    console.log(num+1);
}

// expression(2); it shows error because 'expression' was not initialized yet and somehow hoisting isn't applied here.
const expression = function addTwo(num){
    console.log(num+2);
}
expression(2); //correct