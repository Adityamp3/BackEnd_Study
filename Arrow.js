const user = {
    username: "Aditya",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website`);
        // console.log(this)
    }
}
// user.welcomeMessage()
// console.log(this)




function chai(){
    let user = "MVP"
    console.log(this.user);
    // console.log(this);
    function chini(){
        console.log(`${this.user}`)
    }
    chini()
}
// chai();



const addTwo = (num1, num2) =>{
    return num1+num2;
}
console.log(addTwo(4,6));

const addThree = (num1, num2, num3) =>  num1 + num2 + num3
console.log(addThree(1,2,3));