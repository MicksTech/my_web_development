
function login() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if (user === '' || pass === '') {
        alert('Please fill out this fields');
        return;
    } 
    if (user === 'Admin' && pass === '12345') {
        alert('Successfully to logged in');
        window.location.href = 'button.html';
    } else {
        alert('Wrong Cerdentials!');
        window.location.href = 'login.html';
    }
}