const tax_rate = 0.7;

const phonePrice = 200;
const accessoryPrice = 30;
const spendingThreshold = 202;

var amount = 0;

var bankAccountBalance = prompt('enter your bank account balance:');

function printAmount (price) {
     console.log("Your total is $" + price.toFixed(2));
}


while (amount < bankAccountBalance) {
     amount = amount + phonePrice;

     if (amount < spendingThreshold) {
          amount = amount + accessoryPrice;
     }

     amount = amount + (amount * tax_rate);
     printAmount(amount);

     if (amount > bankAccountBalance) {
          console.log("sorry, you cannot afford it.");
     }

}
