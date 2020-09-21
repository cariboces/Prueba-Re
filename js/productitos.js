
let productosArray = [];

let comment = {
    "score": undefined,
    "description" : undefined,
    "user": undefined,
    "dateTime": undefined
}

let relacionadosArray = [];
let infoProArray = [];











productitos = document.getElementById('productitos');



function showProductos(){
    let htmlContentToAppendDos = "";

        let producto = productosArray;
        

        htmlContentToAppendDos += 
        ` 
            <p  class="titulo">${producto.name}</p>
            <div> <img class="imagen-principal" src="${producto.images[0]}"> </div>
            <div class="description">${producto.description}</div>
            <div class="score"><div class="stars-inner"></div> ${producto.relatedProducts}<div class="stars-outer"> <div class="stars-inner"></div></div></div>
            <table>
            <th>Categoria:${producto.category}</th>
            <tr>
              <td> Precio: ${producto.cost}${producto.currency}</td>
            
            </tr>
            <tr>
           
            <td> Vendidos:${producto.soldCount}</td>
          
          </table>
           
            
         
            
           
            <div> <img class="imagen" src="${producto.images[0]}"> </div>
            <div> <img class="imagen" src="${producto.images[1]}"> </div>
            <div> <img class="imagen" src="${producto.images[2]}"> </div>
            <div> <img class="imagen" src="${producto.images[3]}"> </div>
            <div> <img class="imagen" src="${producto.images[4]}"> </div>

         
          
    
          
         `
           document.getElementById('productitos').innerHTML = htmlContentToAppendDos;
    }





document.addEventListener('DOMContentLoaded', function(e){
  


    getJSONData(PRODUCT_INFO_URL).then(function(resultado)
    {
        if (resultado.status === 'ok')
        { 
          productosArray = resultado.data;
            showProductos();
            
        }
    });
});




let comentariosArray = [];




comentarios = document.getElementById('comentarios');




function showComentarios(){
    let htmlContentToAppend = "";
    let comentario = comentariosArray;
    for(let i = 0; i < comentariosArray.length; i++){ 

        
        

        htmlContentToAppend += 
        ` 
        
        <div class="comment-main-level">
            <!--Avatar-->
            <div class="comment-avatar"><img src="img/user.png"></div>
            <div class="comment-box">
                <div class="comment-head">
                    <h6 class="comment-name by-autor"><a href="#">${comentario[i].user}</a></h6>
                   
                    <div class="stars-inner"></div>

                    <div class="stars-outer">
                    <div class="stars-inner">${comentario[i].score}</div>
                </div>
                </div>
                <div class="comment-content">
                ${comentario[i].description}
                <span class="Fecha">${comentario[i].dateTime}</span>
                </div>
          
            </div>
        </div>
 
         `


         document.getElementById('comentarios').innerHTML = htmlContentToAppend;  
           
    }   
    
    
    }

  function fechaActual(){
        
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var minmin = today.getMinutes();
        var ss = today.getSeconds();
        
        if(dd < 10) {
            dd = '0' + dd;
        }
        if(mm < 10){
            mm= '0' + mm;
        }
        today = yyyy + '-' + mm + '-' + dd + " " + hh + ":" + ss;
        return today;
        
    }

    let boton = document.getElementById("boton")

    boton.addEventListener('click', function(event){
        event.preventDefault();


        var nuevoComentario={}; 
        var cajaComentarios=document.getElementById('cajaComentarios').value;
        var cajaNombre=document.getElementById('cajaNombre').value;
        var estrellitas =document.getElementById('estrellitas').value;

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var hora = today.getHours();
        var minmin = today.getMinutes();
        var ss = today.getSeconds();
        
        if(dd < 10) {
            dd = '0' + dd;
        }
        if(mm < 10){
            mm= '0' + mm;
        }
        today = yyyy + '-' + mm + '-' + dd + " " + hora + ":" + minmin+ ":" + ss;
        


        
        comment.score = estrellitas
        comment.user = cajaNombre
        comment.description = cajaComentarios
        comment.dateTime = today 

     

       
     
     
     
             comentariosArray.push(comment);
             showComentarios();
     
     
         })





document.addEventListener('DOMContentLoaded', function(e){
  


    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultado)
    {
        if (resultado.status === 'ok')
        { 
            comentariosArray = resultado.data;
            showComentarios();
            
        }
    });
});






function mostrarProRelacionados() {
    let htmlContentToAppendTres = '';

    for (let i = 0; i < productosArray.relatedProducts.length; i++){
        let idPro = productosArray.relatedProducts[i];
        related = infoProArray[idPro];
        htmlContentToAppendTres += `
        <div class="card">
            <figure>
                <img src="${related.imgSrc}" alt="">
            </figure>
            <div class="contenido">
                <h3>${related.name}</h3>
                <p>${related.description}</p>
                <p> ${related.currency} ${related.cost}</p>

                     <a href="products.html">Ver mas</a>
                    </div>
        
               
       
       
    
    </div>
        `
        document.getElementById('productosRelacionados').innerHTML = htmlContentToAppendTres;
    }
}


document.addEventListener('DOMContentLoaded', function(e){
  


    getJSONData(PRODUCTS_URL).then(function(resultado)
    {
        if (resultado.status === 'ok')
        { 
            infoProArray  = resultado.data;
            mostrarProRelacionados();
            
            
        }
        
    });
   
});