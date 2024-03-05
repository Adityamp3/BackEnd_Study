// If 'break' is not given after each case then it will execute all the rest code except 'default'
const month = "April";

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;
    
    default:
        console.log("Default case match");
        break;
}