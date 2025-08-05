document.getElementById('button').addEventListener('click', function () {
    Swal.fire({
        title: "Congrats",
        text: "You are hired!",
        icon: "success",
        confirmButtonColor: "#035e00ff",
        confirmButtonText: 'Salamat',
        showCloseButton: true
    });
});