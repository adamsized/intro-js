



const phonePrice = 200;

const accessoryPrice = 10;

const spendingThreshold = 400;

var tax = 0.7;

var phoneCount = 0;

var accessoryCount = 0;

function totalPrice (price) {

     var total = price * (1+tax);
     console.log("this is the total: $" + String(total.toFixed(2)));
     return total.toFixed(2);

}

var bankAccount = prompt('Ready to buy some phones? Enter your bank account balance.');
while (true) {


     bankAccount = Number(bankAccount);

     var subtotal = phonePrice + (accessoryPrice * 3);
     if (subtotal < spendingThreshold) {
          console.log("this is subtotal with phone and accesories: $" + String(subtotal.toFixed(2)));
     }

     var total = totalPrice(subtotal);

     if (bankAccount < total) {
          console.log('sorry you cannot afford it');
          console.log("you've bought " + phoneCount + " phones" );
          console.log("you've bought " + accessoryCount + " accessories" );
          break;
     } else {
          bankAccount = bankAccount - total;
          phoneCount = phoneCount + 1;
          accessoryCount = accessoryCount + 3;
     }

     console.log("your bank balance is: $" + String(bankAccount.toFixed(2)));
}







// while (true){
//      if (bankAccount < phonePrice) {
//           console.log("sorry, you can't afford a phone.");
//      }

// }
