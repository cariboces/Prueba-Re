//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});
//https://japdevdep.github.io/ecommerce-api/product/5678.json
    



function des (){
  datos.sort(function (a, b) {
    if (a.soldCount> b.soldCount) {
      return 1;
    }
    if (a.soldCount < b.soldCount) {
      return -1;
    }
 
    return 0;
  })
}

function asc(){
     
datos.sort(function (a, b) {
  if (a.cost > b.cost) {
    return 1;
  }
  if (a.cost < b.cost) {
    return -1;
  }

  return 0;
})

datos.reverse();
}



fetch("https://japdevdep.github.io/ecommerce-api/product/all.json")
.then(res => res.json())
.then(datos => {
    tabla(datos)

})


function tabla(datos){

  
datos.sort(function (a, b) {
    if (a.soldCount> b.soldCount) {
      return 1;
    }
    if (a.soldCount < b.soldCount) {
      return -1;
    }
    
    return 0;
  })

   
datos.sort(function (a, b) {
    if (a.cost > b.cost) {
      return 1;
    }
    if (a.cost < b.cost) {
      return -1;
    }
    
    return 0;
  })

  datos.reverse(); 
 
    contenedor.innerHTML = ''
    i = 0;
    for( let valor of datos){

        

        contenedor.innerHTML += `
        <tr class="fondoC">
        <th class="nombrE">${datos[i].name}</th>
        <th class="descripcio">${datos[i].description}</th>
        <th class="costo">${datos[i].cost} ${datos[i].currency}</th>
        <th class="bloque"><img src="${datos[i].imgSrc}" class="autoF"></th>
        
        <th class="bloque">${datos[i].soldCount} SoldCount</th>
       </tr>

        
        
        `
        
        i++
    }
   

}




