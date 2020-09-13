const form = document.getElementById('form');
const username = document.getElementById('usuario');
const password = document.getElementById('contra');

form.addEventListener('submit', function(event){
  event.preventDefault();
  let users = Array({
    usuario: username.value,
    contraseña: password.value

  });
 
  if (username.value.trim()==='' || password.value.trim()===''){
    alert('Esta vacio');
  }else{
    localStorage.setItem('user',JSON.stringify(users));
    location.href='principal.html';
  }


});




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
