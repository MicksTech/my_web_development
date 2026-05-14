const nameInput = document.getElementById('name');
const form = document.getElementById('userForm');
const display = document.getElementById('display');

window.onload = function () {
    const savedUser = localStorage.getItem('user');

    if (savedUser) {
        nameInput.value = savedUser;
        display.innerHTML = 'Welcome back, ' + savedUser;
    }
};

form.addEventListener('submit', function (e) { 
    e.preventDefault();
    
    localStorage.setItem('user', nameInput.value);

    display.innerHTML = 'User saved: ' + nameInput.value;
});