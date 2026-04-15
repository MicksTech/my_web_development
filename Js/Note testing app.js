const OpenForm = document.getElementById("OpenForm");
const FormAdd = document.getElementById("formAdd");

if (OpenForm && FormAdd) {
    OpenForm.addEventListener('click', () => {
        FormAdd.style.display = 'flex';
        OpenForm.style.display = 'none';
    });
}