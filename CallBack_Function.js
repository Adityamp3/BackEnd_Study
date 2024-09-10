// Using Callback --------------------------------------------------------------------------------------------------------------

let foodOrder = ["Pizza", "Burger", "Pasta", "Biryani", "Fried Rice"];

function createOrder(foodOrder) {
  //? returns orderID
  return new Promise((res, rej)=>{
    setTimeout(()=>{
        if (foodOrder.length > 0) {
            let orderID = 5674;
            console.log("Operation 1 -");
            res("Data 1");
          }
      }, 1000);
  });  
}

function prodeedToPayment(orderID, callback) {
  //? returns transaction id

  if (orderID) {
    let paymentID = 3456;
    callback(paymentID);
  }
}

function confirmationSummary(transactionID) {
  //? returns confirmation message

  if (transactionID) {
    let message = "Your order is confirmed.";
    console.log(`${message} Order ID = ${transactionID}.`);
    return true;
  }
}

createOrder(foodOrder, (orderID) => {
  prodeedToPayment(orderID, (paymentID) => {
    confirmationSummary(paymentID);
  });
});



// Using Promise Chaining ----------------------------------------------------------------------------------------------------




function createOrder(foodOrder) {
    return new Promise((resolve, reject) => {
      if (foodOrder.length > 0) {
        let orderID = 5674;
        resolve(orderID);
      } else {
        reject("No food items in the order.");
      }
    });
  }
  
  function proceedToPayment(orderID) {
    return new Promise((resolve, reject) => {
      if (orderID) {
        let paymentID = 3456;
        resolve(paymentID);
      } else {
        reject("Invalid order ID.");
      }
    });
  }
  
  function confirmationSummary(transactionID) {
    if (transactionID) {
      let message = "Your order is confirmed.";
      console.log(`${message} Order ID = ${transactionID}.`);
      return true;
    } else {
      throw new Error("Invalid transaction ID.");
    }
  }
  
