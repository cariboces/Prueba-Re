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
    alert('esta vacio');
  }else{
    localStorage.setItem('user',JSON.stringify(users));
    location.href='principal.html';
  }
});