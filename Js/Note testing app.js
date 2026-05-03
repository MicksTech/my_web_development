document.addEventListener('DOMContentLoaded', LoadNotes);

function OpenForm() {
    const openform = document.getElementById('Openform');
    const addnote = document.querySelector('.Addnote');

    if (addnote.style.display === 'none' || addnote.style.display === '') {
        addnote.style.display = 'block';
        openform.style.transform = 'rotate(45deg)';
    } else {
        addnote.style.display = 'none';
        openform.style.transform = 'rotate(0deg)';
    }
}


function AddNote() {
    const inputtitle = document.getElementById('inputtitle').value.trim();
    const inputnote = document.getElementById('inputnote').value.trim();

    if (inputtitle && inputnote) {

        const note = {
            title: inputtitle,
            text: inputnote
        };

        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));

        DisplayNote(note);

        document.getElementById('inputtitle').value = '';
        document.getElementById('inputnote').value = '';

        Swal.fire({
            icon: 'success',
            title: 'Note Added',
            text: 'Your note has been added successfully!',
            timer: 2000,
            showConfirmButton: false
        });

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please fill in both the title and note fields.',
            timer: 2000,
            showConfirmButton: false
        });
    }
}

function DisplayNote(note) {
    const FormAdd = document.createElement('div');
    FormAdd.classList.add('formadd');

    FormAdd.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.text}</p>
    `;

    document.querySelector('.Notes').appendChild(FormAdd);
}

function LoadNotes() {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.forEach(note => {
        DisplayNote(note);
    });
}