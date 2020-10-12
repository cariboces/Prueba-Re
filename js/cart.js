

let productosCartArray = [];




cartProductos = document.getElementById('cartProductos');



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

    let precioCantidad = "";

    let precioCosto = "";

        let precioTotal = 0;

    

        let producto = productosCartArray;

        
        for(let i = 0; i < producto.length; i++){

        precioCantidad += producto[i].count;

        precioCosto += producto[i].unitCost;

        precioTotal = precioTotal + precioCantidad * precioCosto;

    }

        

        


   


    mostrarPrecio = `
    <tr id="total">
    <td>Total</td>
    <td>${precioTotal}</td>
    </tr>
        `

      document.getElementById('total').innerHTML = mostrarPrecio;




    }




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

