let amount= 50;
let discount=null;
let final_amount=null;

if (amount>= 100){
    discount=20;
    final_amount =amount-amount*discount/100;
}
else if ( amount >= 50){
    discount=10;
    final_amount= amount-amount*discount/100;
}
else{
    
    final_amount=amount;
}
console.log(final_amount)