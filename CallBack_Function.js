let foodOrder = ["Pizza", "Burger", "Pasta", "Biryani", "Fried Rice"];

function createOrder(foodOrder, callback) {
  //? returns orderID

  if (foodOrder.length > 0) {
    let orderID = 5674;
    callback(orderID);
  }
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
