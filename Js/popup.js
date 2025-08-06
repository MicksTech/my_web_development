const toggleBtn = document.getElementById('toggle-button');
const closeBtn = document.getElementById('close');
const popupForm = document.getElementById('popup-form');

if (toggleBtn && popupForm) {
    toggleBtn.addEventListener('click', function () {
        popupForm.style.display = 'flex';
        toggleBtn.style.display = 'none';
    });
}

if (closeBtn && popupForm && toggleBtn) {
    closeBtn.addEventListener('click', function () {
        popupForm.style.display = 'none';
        toggleBtn.style.display = 'flex';
    });
}