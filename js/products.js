//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});
//https://japdevdep.github.io/ecommerce-api/product/5678.json

let url = "https://japdevdep.github.io/ecommerce-api/product/all.json"

let categoriasArray = [];

let asc = document.getElementById('asc');
let asc2 = document.getElementById('asc2');
let desc = document.getElementById('desc');

    









fetch(url)
.then(res => res.json())
.then(datos => {
    tabla(datos)

})






  

function tabla(datos){

  



 
    contenedor.innerHTML = ''
    i = 0;
    for( let valor of datos){

        

        contenedor.innerHTML += `
        <tr class="fondoC">
        <th class="nombrE">${datos[i].name} </th> 
        <th class="descripcio">${datos[i].description}</th>
        <th class="costo">${datos[i].cost} ${datos[i].currency}</th>
        <th class="bloque"><img src="${datos[i].imgSrc}" class="autoF"></th>
        
        <th class="bloque">${datos[i].soldCount} SoldCount</th>
       </tr>

       <a  href="product-info.html">Ir al auto</a>
        
        `
        
        i++
    }
   

}



function ordenarPorCosto(){
  let categorias = categoriasArray;
     
categorias.sort(function (a, b) {
  if (a.cost > b.cost) {
    return 1;
  }
  if (a.cost < b.cost) {
    return -1;
  }
  // a must be equal to b
  return 0;
})

categorias.reverse(); 

contenedor.innerHTML = ''
i = 0;
for( let valor of categorias){

    

    contenedor.innerHTML += `
    <tr class="fondoC">
    <th class="nombrE">${categorias[i].name}</th>
    <th class="descripcio">${categorias[i].description}</th>
    <th class="costo">${categorias[i].cost} ${categorias[i].currency}</th>
    <th class="bloque"><img src="${categorias[i].imgSrc}" class="autoF"></th>
    
    <th class="bloque">${categorias[i].soldCount} SoldCount</th>
   </tr>

    
    
    `
    
    i++
}

}


function ordenarPorCostoDos(){
  let categorias = categoriasArray;
     
categorias.sort(function (a, b) {
  if (a.cost > b.cost) {
    return 1;
  }
  if (a.cost < b.cost) {
    return -1;
  }
  // a must be equal to b
  return 0;
})



contenedor.innerHTML = ''
i = 0;
for( let valor of categorias){

    

    contenedor.innerHTML += `
    <tr class="fondoC">
    <th class="nombrE">${categorias[i].name}</th>
    <th class="descripcio">${categorias[i].description}</th>
    <th class="costo">${categorias[i].cost} ${categorias[i].currency}</th>
    <th class="bloque"><img src="${categorias[i].imgSrc}" class="autoF"></th>
    
    <th class="bloque">${categorias[i].soldCount} SoldCount</th>
   </tr>

    
    
    `
    
    i++
}

}

function ordenarPorVentas(){
  let categorias = categoriasArray;
  categorias.sort(function (a, b) {
    if (a.soldCount> b.soldCount) {
      return 1;
    }
    if (a.soldCount < b.soldCount) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })
  categorias.reverse(); 
contenedor.innerHTML = ''
i = 0;
for( let valor of categorias){

    

    contenedor.innerHTML += `
    <tr class="fondoC">
    <th class="nombrE">${categorias[i].name}</th>
    <th class="descripcio">${categorias[i].description}</th>
    <th class="costo">${categorias[i].cost} ${categorias[i].currency}</th>
    <th class="bloque"><img src="${categorias[i].imgSrc}" class="autoF"></th>
    
    <th class="bloque">${categorias[i].soldCount} SoldCount</th>
   </tr>

    
    
    `
    
    i++
}

}

var getJSONData = function(url){
  var result = {};
  return fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }else{
      throw Error(response.statusText);
    }
  })
  .then(function(response) {
        result.status = 'ok';
        result.data = response;
    
        return result;
  })
  .catch(function(error) {
      result.status = 'error';
      result.data = error;
    
      return result;
  });
}



asc.addEventListener('click', function(e){
  


  getJSONData(url).then(function(resultado)
  {alert('funciona?');
      if (resultado.status === 'ok')
      { 
          categoriasArray = resultado.data;
          ordenarPorCosto();
          
      }
  });
});

desc.addEventListener('click', function(e){
  


  getJSONData(url).then(function(resultado)
  {alert('funciona?');
      if (resultado.status === 'ok')
      { 
          categoriasArray = resultado.data;
          ordenarPorVentas();
          
      }
  });
});

asc2.addEventListener('click', function(e){
  


  getJSONData(url).then(function(resultado)
  {alert('funciona?');
      if (resultado.status === 'ok')
      { 
          categoriasArray = resultado.data;
          ordenarPorCostoDos();
          
      }
  });
});