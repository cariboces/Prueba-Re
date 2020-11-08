
let form = document.getElementById('form');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let tel = document.getElementById('telefono');
let usuarioD = document.getElementById('usuarioDatos');







function usuarioDatos(){

    let datosUsuario = JSON.parse(localStorage.getItem('usersDatos'));

    usuarioD.innerHTML='';


 
    usuarioD.innerHTML = `

  
  

    <tr>

    <td  class="blanco">Nombre</td>

    <td class="blanco">${datosUsuario[0].nombre}</td>

  </tr>

  <tr>

    <td  class="blanco">Apellido:</td>

    <td class="blanco">${datosUsuario[0].apellido}</td>

  </tr>
  <tr>

    <td  class="blanco"> Email:</td>

    <td class="blanco">${datosUsuario[0].email}</td>


  </tr>

  <tr>

    <td  class="blanco"> Telefono:</td>

    <td class="blanco">${datosUsuario[0].tel}</td>


  </tr>
    
    `

   


}







form.addEventListener('submit', function(event){
    event.preventDefault();
    let userDatos = Array({
      nombre: nombre.value,
      apellido: apellido.value,
      email: email.value,
      tel: tel.value
  
    });
   

 localStorage.setItem('usersDatos',JSON.stringify(userDatos));
 usuarioDatos();
  
});

document.addEventListener('DOMContentLoaded', function(e){

    usuarioDatos();


  
});


