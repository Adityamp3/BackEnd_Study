function user(userName = 'DEFAULT'){
    if(!userName){
        return `Enter a valid name`;
    }
    return `${userName} logged in`;
}
// console.log(user());


function calculateCartPrice(val1, val2, ...num1){       //rest operator(spread operator)
    return num1;
}
// console.log(calculateCartPrice(100, 200, 500, 1000, 2000));



userDetails = {
    name: "Gyan",
    price: 1299
}
function passingObject(anyObject){
    console.log(`User is ${anyObject.name} and price is ${anyObject.price}`);
}
// passingObject(userDetails);



const arr = [111, 222, 999, 555]; 
function passingArray(anyArray){
    console.log(`Second index is ${anyArray[1]}`);
}
passingArray(arr)