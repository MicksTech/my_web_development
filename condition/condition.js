let balance = 7000;

if (balance > 5000) {
    console.log("You have a high balance."); // This block runs if balance is greater than 5000
} else if (balance > 3000)  {
    console.log("You have a low balance."); // This block runs if balance is greater than 3000 but less than or equal to 5000
} else {
    console.log("Your balance is moderate or low."); // This block runs if balance is less than or equal to 3000
}
console.log("The End");