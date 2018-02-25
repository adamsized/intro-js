



const phonePrice = 200;
const accessoryPrice = 10;
const spendingThreshold = 400;
var tax = 0.7;
var phoneCount = 0;
var accessoryCount = 0;
var total = 0;

function totalPrice (price) {

     var total = price * (1+tax);
     console.log("this is the total: $" + String(total.toFixed(2)));
     return total.toFixed(2);

}
var bankAccount = prompt('Ready to buy some phones? Enter your bank account balance.');

while ( total < bankAccount) {
     bankAccount = Number(bankAccount);

     var subtotal = phonePrice;
     if (subtotal < spendingThreshold) {
          subtotal = subtotal + accessoryPrice;
     }

     total = totalPrice(subtotal);

     bankAccount = bankAccount - total;
     phoneCount = phoneCount + 1;
     accessoryCount = accessoryCount + 1;

     console.log('this is' + String(bankAccount));

}

console.log('sorry you cannot afford it');
console.log("you've bought " + phoneCount + " phones and " + accessoryCount + " accessories" );
