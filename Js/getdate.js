const Button = document.getElementById('button');
const Close = document.getElementById('close');

Button.addEventListener('click', function () {
    document.getElementById('demo').innerHTML = Date();
});

Close.addEventListener('click', function () {
    document.getElementById('demo').innerHTML = '';
});