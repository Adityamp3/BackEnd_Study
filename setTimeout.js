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
