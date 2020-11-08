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





       
       <article class="product">
           <div class="img-container">
               <img src="${datos[i].imgSrc}" alt="product" class="product-img"> 
          <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              <a href="product-info.html">Ir al auto</a>
          </button>
           </div>
           <h3>${datos[i].name}</h3>
           <p> ${datos[i].description} </p>
           <h4>${datos[i].cost} ${datos[i].currency}</h4>
           <h4>${datos[i].soldCount} </<h4>

       </article>

       <!--end of single product-->




        
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
    <article class="product">
    <div class="img-container">
        <img src="${categorias[i].imgSrc}" alt="product" class="product-img"> 
   <button class="bag-btn" data-id="1">
       <i class="fas fa-shopping-cart"></i>
       <a href="product-info.html">Ir al auto</a>
   </button>
    </div>
    <h3>${categorias[i].name}</h3>
    <p> ${categorias[i].description} </p>
    <h4>${categorias[i].cost} ${categorias[i].currency}</h4>
    <h4>${categorias[i].soldCount} </<h4>

</article>


    
    
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
    <article class="product">
    <div class="img-container">
        <img src="${categorias[i].imgSrc}" alt="product" class="product-img"> 
   <button class="bag-btn" data-id="1">
       <i class="fas fa-shopping-cart"></i>
       <a href="product-info.html">Ir al auto</a>
   </button>
    </div>
    <h3>${categorias[i].name}</h3>
    <p> ${categorias[i].description} </p>
    <h4>${categorias[i].cost} ${categorias[i].currency}</h4>
    <h4>${categorias[i].soldCount} </<h4>

</article>

    
    
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
    <article class="product">
    <div class="img-container">
        <img src="${categorias[i].imgSrc}" alt="product" class="product-img"> 
   <button class="bag-btn" data-id="1">
       <i class="fas fa-shopping-cart"></i>
       <a href="product-info.html">Ir al auto</a>
   </button>
    </div>
    <h3>${categorias[i].name}</h3>
    <p> ${categorias[i].description} </p>
    <h4>${categorias[i].cost} ${categorias[i].currency}</h4>
    <h4>${categorias[i].soldCount} </<h4>

</article>

    
    
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
  {
      if (resultado.status === 'ok')
      { 
          categoriasArray = resultado.data;
          ordenarPorCosto();
          
      }
  });
});

desc.addEventListener('click', function(e){
  


  getJSONData(url).then(function(resultado)
  {
      if (resultado.status === 'ok')
      { 
          categoriasArray = resultado.data;
          ordenarPorVentas();
          
      }
  });
});

asc2.addEventListener('click', function(e){
  


  getJSONData(url).then(function(resultado)
  {
      if (resultado.status === 'ok')
      { 
          categoriasArray = resultado.data;
          ordenarPorCostoDos();
          
      }
  });
});