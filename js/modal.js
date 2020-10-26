let modal = document.querySelector('.modal-background');
let abrir = document.querySelector('.abrir');
let cerrar = document.querySelectorAll('.cerrar, .aceptar');

abrir.addEventListener('click', function(){
    modal.classList.add('show');
});

cerrar.forEach(element => {
    element.addEventListener('click', function(){
        modal.classList.remove('show');
    });
});