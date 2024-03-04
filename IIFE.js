// IIFE(Immediately Invoked Function Expression) is used to save a function from the global variables to pollute them 
// (()=>{...})();    here semicolon(;) is used to stop IIFE as it invoked the function but don't when to stop or end the function

(function jaadu(){
    console.log(`Dhoop`);
})();

(()=>{
    console.log('DB CONNECTED');
})();

((name)=>{
    console.log(`Hi, my name is chiki-chiki Slim ${name}.`);
})("Soshal");