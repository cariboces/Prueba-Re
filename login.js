
var usu = document.getElementById("usuario");
var contra = document.getElementById("contra");


  function rediccionar(){
  
    if (usu.value.trim()===""){
      alert("ingresa tu usuario")
      return false
    }
    if (contra.value.trim()===""){
      alert("ingresa tu contraseña")
      return false
    }
    if (usu.value.lenght > 0 && contra.value.lenght > 0)
       location.href = "principal.html";
  }





//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
 document.getElementById('btn').addEventListener("click",rediccionar);
});