// This is important JavaScript Interview question on setTimeout.

console.log("X");

setTimeout(()=>{
  console.log("Y");
  
  setTimeout(()=>{
  console.log("Z");
  }, 500);

  console.log("Hello!");  
}, 1000);

setTimeout(()=>{
  console.log("W"); 
}, 1500);

console.log("End");

// Output:
// X
// End
// Y
// Hello!
// W
// Z


// VERY VERY IMPORTANT !!!!!!!!!!!

function counter() {
  for(var i=1; i<=4; i++) {
      function z(i){
          setTimeout(() => {
            console.log(i);
            }, i * 1000);
      }
      z(i);
  }
}
counter();

// Output: 
// 1
// 2
// 3
// 4

function counter() {
  for(let i=1; i<=4; i++) {
    setTimeout(()) => {
      console.log(i);
    }, i * 1000);
  }
}
counter();

// Output: 
// 1
// 2
// 3
// 4

function counter() {
  for(var i=1; i<=4; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
counter();

// Output: 
// 4
// 4
// 4
// 4
