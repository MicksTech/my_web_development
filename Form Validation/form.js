const email = 'john@gmail.com';

const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (pattern.test(email)) {
    console.log('Valid email address');
} else {
    console.log('Invalid email address');
}


function togglePassword() {
    const x = document.getElementById("password");
    if (x.type === "password") {

        // Change the input type to text to show the password
        x.type = "text";
    } else {
        
        // Change the input type back to password to hide the password
        x.type = "password";
    }
}