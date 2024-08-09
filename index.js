
let cardInserted = false;
let insertedCard = prompt("Insert your card?");
let cardInfo = "sandra";
if(insertedCard){
    cardInserted = true;
    alert("card inserted successfully!");
    alert("Welcome"  +  " "  + cardInfo);
    // enterPIN();
} else {
    alert("card not inserted.exiting.")
}
let cardUser = {
    name:"sandra",
    bank:"access",
    accountBalance1:"500000",
    pin:7777,
    type:"savings",
}
function enterPIN(){
    if (cardInserted) {
        cardInserted = true;
        let pin = prompt("Enter your pin:");
        if (pin) {
            alert("Pin entered successfully!");
            // mainMenu();
        } else {
            alert("Please enter your pin.");
        }
        }
    }
function mainMenu(){
    let option = prompt("Select an option: (1) Transfer (2) Withdraw (3) Exit");
    switch (option) {
        case "1":
            break;
        case"2":
            break;
        case"3":
            alert("Exiting application.");
            break;
        default:
            alert("Invalid option.Please try again.");
            mainMenu();
   }
 }
 let recipentInfo =  {
    recipientName:"micheal",
    bank:"uba",
    accountBalance2:"20000",
    pin:7777,
    type:"savings",
    recipientAcccounNumber:"121212121212",
 }
 
 function transfer(){
    let recipentAccount = prompt("Enter recipient's account number:");
        let details = prompt("Select an option: (1) Access (2) Uba (3) Opay");
    let recipentName = prompt("Enter recipient's account name:");
    let transferAmount = prompt("Enter transfer amount:");
    let confirmTransfer = prompt(`Confirm transfer of $${transferAmount} to ${recipentName} (${details}) (${recipentAccount})? (yes/no)`);

    if (confirmTransfer === "yes"){
        alert("Transfer successful!");
        displayBalance(cardUser.accountBalance1,transferAmount);
    } else if (confirmTransfer === "no"){
        alert("Transfer cancelled.");
        mainMenu();
   } else {
    alert("Invalid input.Please enter yes or no.");
   }
    }
    function displayBalance(accountBalance1,transferAmount) {
        alert(`Your account balance is:$ ${accountBalance1 - transferAmount}`);
        }



enterPIN();
mainMenu();
transfer();
// function a(){//global scope
//     let str ="Hello";
//     function b(){ // child scope
//         let user = "World";
//     }
//     c(str);
// }

// function c( world){
//   let hi = world;

// }