document.getElementById("btn-registrarse").addEventListener("click", register);

document.getElementById("btn_iniciar-sesion").addEventListener("click",iniciarSesion);


var contenedor_login_register = document.querySelector(".contenedor_login-register");
var formulario_login = document.querySelector(".formulario-login");
var formulario_register = document.querySelector(".formulario_register");
var caja_trasera_register = document.querySelector(".caja_trasera-register");
var caja_trasera_login = document.querySelector(".caja_trasera-login");



function iniciarSesion(){
  
    
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = '10px';
    formulario_login.style.display = 'block';
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = '0';


}





function register(){
 
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = '410px';
    formulario_login.style.display = 'none';
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = '1';
}
