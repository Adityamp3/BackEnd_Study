// Falsy Values:
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// Some Truthy Values:
//  "0", 'false', " ", [], {}, function(){}, etc...

const userEmail = "aditya@google.com";
if(userEmail){
    console.log("Got user in");
}else{
    console.log("Failed");
}



// Nullish Coalescing Operator (??): null undefined
// Sometimes when we fetch some data and no data is returned. But there are other functions dependent on it, hence it's used so that rest code don't misbehaive

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 12;
console.log(val1);

val2 = null ?? undefined ?? 10 ?? 20;
console.log(val2);



//Terniary Operator
// condition ? true : false

const crax = 25;
crax>30 ? console.log("TRUE") : console.log("FALSE");
