const getTicketPrice = (age) => {
    if (age < 12) {
        return 150;
    }
    else if (age <= 17) {
        return 200;
    }
    else if (age <= 59) {
        return 300;
    }
    else {
        return 200;
    }
};
const calculateTotal = (price, quantity) => {
    return price * quantity;
};

const applyDiscount = (total, quantity) => {
    if (quantity >= 5) {
        return total * 10 / 100;
    }
    else {
        return 0;
    }
};

const bookTicket = (name, age, quantity, callback) => {
    let price = getTicketPrice(age);

    let total = calculateTotal(price, quantity);

    let discount = applyDiscount(total, quantity);

    let finalAmount = total - discount;

    callback(name, quantity, total, discount, finalAmount);
};

const displayBooking = (name, quantity, total, discount, finalAmount) => {
    console.log("Customer:", name);
    console.log("Tickets:", quantity);
    console.log("Total Before Discount: Rs.", total);
    console.log("Discount: Rs.", discount);
    console.log("Final Amount: Rs.", finalAmount);
};

bookTicket("Raj", 30, 7, displayBooking);