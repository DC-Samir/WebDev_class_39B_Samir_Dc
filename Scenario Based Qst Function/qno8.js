
let getFoodPrice = (foodName) => {
    if (foodName === "Burger") {
        return 250;
    }
    else if (foodName === "Pizza") {
        return 500;
    }
    else if (foodName === "Momo") {
        return 150;
    }
    else if (foodName === "Chowmein") {
        return 180;
    }
    else {
        return 0;
    }
};

let calculateServiceCharge = (total) => {
    return total * 5 / 100;
};

let calculateOrder = (foodName, quantity, callback) => {
    let price = getFoodPrice(foodName);

    if (price === 0 || quantity <= 0) {
        return null;
    }
    else {
        let foodAmount = price * quantity;
        return callback(foodAmount);
    }
};

let generateReceipt = (customerName, foodName, quantity, callback) => {
    let foodAmount = calculateOrder(foodName, quantity, (total) => {
        return total;
    });

    if (foodAmount === null) {
        console.log("Invalid food item or quantity!");
    }
    else {
        let serviceCharge = callback(foodAmount);
        let finalAmount = foodAmount + serviceCharge;

        console.log("----- Restaurant Receipt -----");
        console.log("Customer: " + customerName);
        console.log("Food: " + foodName);
        console.log("Quantity: " + quantity);
        console.log("Food Amount: Rs. " + foodAmount);
        console.log("Service Charge: Rs. " + serviceCharge);
        console.log("Final Amount: Rs. " + finalAmount);
    }
};

generateReceipt("Raj", "Pizza", 3, calculateServiceCharge);
