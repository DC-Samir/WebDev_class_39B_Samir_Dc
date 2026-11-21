const calculateDelivery = (distance) => {
    if (distance <= 2) {
        return 30;
    }
    else {
        return 30 + (distance - 2) * 15;
    }
};

const checkFreeDelivery = (orderAmount) => {
    return orderAmount >= 1000;
};
const processOrder = (customer, distance, orderAmount, callback) => {
    let deliveryCharge = callback(distance, orderAmount);

    console.log("Customer:", customer);
    console.log("Order Amount: Rs.", orderAmount);
    console.log("Distance:", distance, "km");
    console.log("Delivery Charge: Rs.", deliveryCharge);
};
const getFinalDeliveryCharge = (distance, orderAmount) => {
    if (checkFreeDelivery(orderAmount)) {
        return 0;
    }
    else {
        return calculateDelivery(distance);
    }
};
processOrder("Raj", 8, 990, getFinalDeliveryCharge);