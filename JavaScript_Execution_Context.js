// JavaScript Execution Context

// 3 types of EC
// ▶ Global Execution Context
// ▶ Functional Execution Context
// ▶ Eval Execution Context (property of GEC)

// Phase :
// ▶ Memory Creation Phase  (variables are stored in memory in this phase, not execute)
// ▶ Execution Creation Phase (execution happens)


// ****************************************************************************************************

// Steps for the following code:
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

console.log(result1);
console.log(result2);

/*
Step 1: Global Execution Context created and allocated into 'this'
Step 2: Memory Phase - 
    val1 -> undefined
    val2 -> undefined
    addNum -> defination(function ke andar ka info)
    result1 -> undefined
    result2 -> undefined

Step 3: Execution Phase - 
    val1 -> 10
    val2 -> 5
    addNum -> ----------------------------  (another execution context/ sandbox)
             |  new variable environment  |
             |              +             |
             |    executional thread      |
             |____________________________|
                            |
                            |
                            ↓
               Step 3.1: Memory Phase - 
                   val1 -> undefined
                   val2 -> undefined
                   total -> undefined
               Step 3.2: Execution Phase - 
                   num1 -> 10
                   num2 -> 5
                   total -> 15
                   (now this 'total' is returned to GEC... to 'result1')
                   (another GEC gets DELETED as its' work is done)
        
    result -> 15
    again same 'addNum' gets executed abnd create another GEC for result2.

    addNum -> ----------------------------  (another execution context/ sandbox)
             |  new variable environment  |
             |              +             |
             |    executional thread      |
             |____________________________|
                            |
                            |
                            ↓
               Step 3.1: Memory Phase - 
                   val1 -> undefined
                   val2 -> undefined
                   total -> undefined
               Step 3.2: Execution Phase - 
                   num1 -> 10
                   num2 -> 2
                   total -> 12
                   (now this 'total' is returned to GEC... to 'result1')
                   (another GEC gets DELETED as its' work is done)
    result -> 12
    console.log(result1);
    console.log(result2);
*/

// ***************************************************************************************************************

/* Call Stack 
    ▶ to understand it properly run some examples in 'browser source > snippet'.

                    |____________|              Output: one
                    |____________|                      two
                    |____________|                      three
                    |___two()____|                      two
                    |___one()____|                      three
                                                        three

*/
function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one()
two()
three()


// *****************************************************************************************************************
