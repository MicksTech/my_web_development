document.getElementById('demo').innerHTML = localStorage.clickcount;
function clickCounter() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById('demo').innerHTML = localStorage.clickcount;
}