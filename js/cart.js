let premium = document.getElementById('premium');
let express = document.getElementById('express');
let standard = document.getElementById('standard');

let productosCartArray = [];
let porcentajeAumentado = '';




cartProductos = document.getElementById('cartProductos');

function porcentaje(){


   
premium.addEventListener('click', function(){
 let mostrarPorcentaje = '';


  porcentajeAumentado = 15;
  aumentar();


    mostrarPorcentaje = `
    <tr id="aumentarPrecio">
    <td>Envio</td>
    <td>${15}%</td>
    </tr>
        `;

        document.getElementById('aumentarPrecio').innerHTML = mostrarPorcentaje;

});

express.addEventListener('click', function(){
    let mostrarPorcentaje = '';

    porcentajeAumentado = 7;
    aumentar();
   
   
   
       mostrarPorcentaje = `
       <tr id="aumentarPrecio">
       <td>Envio</td>
       <td>${7}%</td>
       </tr>
           `;
   
           document.getElementById('aumentarPrecio').innerHTML = mostrarPorcentaje;
   
   });

   standard.addEventListener('click', function(){
    let mostrarPorcentaje = '';
    


    porcentajeAumentado = 5;
    aumentar();   
   
   
       mostrarPorcentaje = `
       <tr id="aumentarPrecio">
       <td>Envio</td>
       <td>${5}%</td>
       </tr>
           `;
   
           document.getElementById('aumentarPrecio').innerHTML = mostrarPorcentaje;

   
   });

}


function showProductos(){
    let htmlContentToAppendDos = "";

        let producto = productosCartArray;
        
        for(let i = 0; i < producto.length; i++)
    {
        htmlContentToAppendDos += 
        ` 
        <div class="small-container cart-page">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="${producto[i].src}" alt="">
                   <div>
                       <p>${producto[i].name}</p>
                   
                    <br>
                    <a href="">Remove</a>
                    </div>
                    </div>
                </td>
                <td>
                    <input type="number" onclick="aumentar()" value="${producto[i].count}"> </td>
                    <td>
                    
                    ${producto[i].currency}${producto[i].unitCost}</td>
                </tr>
        </table>
    </div>

 

 
          
         `

         
        }
           document.getElementById('cartProductos').innerHTML = htmlContentToAppendDos;
    }

  


    function precioTotal() {
    let mostrarPrecio = ""



    let precioCosto = "";

        let precioTotal = 0;

        let precioCantidad = "";
    

        let producto = productosCartArray;

        
        for(let i = 0; i < producto.length; i++){

        precioCantidad += producto[i].count;

        precioCosto += producto[i].unitCost;



        precioTotal = precioTotal + (Math.round(precioCantidad *  precioCosto * 100) / 100);



    }

   

   


    mostrarPrecio = `
    <tr id="total">
    <td>Total</td>
    <td>${precioTotal}</td>
    </tr>
        `

      document.getElementById('total').innerHTML = mostrarPrecio;




    }

    function aumentar(){
        let mostrarPrecio2 = ""



        let precioCosto = "";
    
            let precioTotal = 0;
    
            let precioCantidad = "";
        
    
            let producto = productosCartArray;
        
        let  precioAumentado = ''

        for(let i = 0; i < producto.length; i++){

            precioCantidad += producto[i].count;
    
            precioCosto += producto[i].unitCost;
    
            precioTotal = precioTotal + precioCantidad * precioCosto;
    
        }

        precioAumentado  = precioTotal + (Math.round(porcentajeAumentado *  precioCosto * 100) / 100);

      

        mostrarPrecio2 = `
        <tr id="total">
        <td>Total</td>
        <td>${precioAumentado}</td>
        </tr>
            `
    
          document.getElementById('total').innerHTML = mostrarPrecio2;

          
    
       }


porcentaje();

document.addEventListener('DOMContentLoaded', function(e){
  


    getJSONData(CART_PINO_URL).then(function(resultado)
    {alert('funciona?');
        if (resultado.status === 'ok')
        { 
            productosCartArray.push(...resultado.data.articles);
            showProductos();
            precioTotal();
            
            
        }
    });
});

