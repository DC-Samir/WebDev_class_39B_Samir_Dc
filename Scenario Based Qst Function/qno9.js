
let calculateBonus = (amount) => {
    if (amount >= 1000) {
        return amount * 15 / 100;
    }
    else if (amount >= 500) {
        return amount * 10 / 100;
    }
    else if (amount >= 100) {
        return amount * 5 / 100;
    }
    else {
        return 0;
    }
};

let calculateTotalBalance = (amount, bonus) => {
    return amount + bonus;
};

let recharge = (number, amount, callback) => {
    let bonus = calculateBonus(amount);
    let totalBalance = callback(amount, bonus);

    console.log("----- Mobile Recharge Receipt -----");
    console.log("Mobile Number: " + number);
    console.log("Recharge Amount: Rs. " + amount);
    console.log("Bonus Received: Rs. " + bonus);
    console.log("Total Balance: Rs. " + totalBalance);
};

recharge("9876543210", 12345, calculateTotalBalance);
