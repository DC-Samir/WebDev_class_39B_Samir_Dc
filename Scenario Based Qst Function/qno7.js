
let validateWithdrawal = (amount, balance) => {
    if (amount <= 0) {
        return false;
    }
    else if (amount % 500 !== 0) {
        return false;
    }
    else if (amount + 25 > balance) {
        return false;
    }
    else {
        return true;
    }
};

let withdrawMoney = (amount, balance, callback) => {
    if (callback(amount, balance)) {
        balance = balance - amount - 25;

        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs. 25");
        console.log("Remaining Balance: Rs. " + balance);
    }
    else {
        console.log("Withdrawal Failed!");
        console.log("Invalid withdrawal amount or insufficient balance.");
        console.log("Remaining Balance: Rs. " + balance);
    }
};

let accountBalance = 50000;
let withdrawalAmount = 7000;

console.log("Account Balance: Rs. " + accountBalance);
console.log("Withdrawal Amount: Rs. " + withdrawalAmount);

withdrawMoney(withdrawalAmount, accountBalance, validateWithdrawal);
