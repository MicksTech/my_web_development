const greeter = {
    message: "say hi",
    time: 4
}
greeter.message = "say hello instead";

console.log(greeter.message);

//Assignment to constant variable.
//SyntaxError: Identifier 'greeter' has already been declared
//Only change inside const 'greeter'