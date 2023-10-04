// let productos = [
//   {
//     id: 1,
//     nombreProducto: "Nuestra tarjeta",
//     descripcion:"Para tu cuaderno, tu laptop o tu mochila. Decile al mundo que estás con nosotros.",
//     precio: 350
//   },
//   {
//     id: 2,
//     nombreProducto:"Buzo",
//     descripcion:"De algodón blanco con capucha, bolsillo canguro. Logo sublimado.",
//     precio:4000,
//   },
//   {
//     id: 3,
//     nombreProducto:"Taza",
//     descripcion:"De cerámica blanca con logo. Capacidad 220ml.",
//     precio:1500,
//   }
// ];



// let carrito = [];


// document.getElementById("p1").addEventListener("click", function() {
//   carrito.push(productos[0]);
// });

// document.getElementById("p2").addEventListener("click", function() {
//   carrito.push(productos[1]);
// });

// document.getElementById("p3").addEventListener("click", function() {
//   carrito.push(productos[2]);
// });


// mostrar carrito por consola
// document.getElementById("verCarrito").addEventListener("click", function() {
//   console.log(carrito);
// });

let productosJson = `[
  {
    "id": 1,
    "nombreProducto": "Nuestra tarjeta",
    "descripcion":"Para tu cuaderno, tu laptop o tu mochila. Decile al mundo que estás con nosotros.",
    "precio": 350,
    "imagen":"/img/tienda/4.png"
  },
  {
    "id": 2,
    "nombreProducto":"Buzo",
    "descripcion":"De algodón blanco con capucha, bolsillo canguro. Logo sublimado.",
    "precio":4000,
    "imagen":"/img/tienda/5.png"
  },
  {
    "id": 3,
    "nombreProducto":"Taza",
    "descripcion":"De cerámica blanca con logo. Capacidad 220ml.",
    "precio":1500,
    "imagen":"/img/tienda/6.png"
  }
]`;

let productosArray = JSON.parse(productosJson);
// console.log(productosJson);


for (let i=0; i<productosArray.length; i++) {
  let producto = document.createElement("article");
  producto.className = "item-box";
  let divImagen = document.createElement("div");
  divImagen.className = "item-box-img";
  let imagen = document.createElement("img");
  imagen.className = "item-img";
  let nombreProducto = document.createElement("h4");
  nombreProducto.className = "item-title";
  let descripcion = document.createElement("p");
  let precio = document.createElement("h4");
  precio.className = "item-text";
  let botonComprar = document.createElement("button");
  botonComprar.className = "boton-comprar";

  imagen.src = productosArray[i].imagen;
  nombreProducto.innerText = productosArray[i].nombreProducto;
  descripcion.innerText = productosArray[i].descripcion;
  precio.innerText = productosArray[i].precio;
  botonComprar.innerText = "COMPRAR";
  botonComprar.className = "button";

  divImagen.appendChild(imagen);
  producto.appendChild(divImagen);
  producto.appendChild(nombreProducto);
  producto.appendChild(descripcion);
  producto.appendChild(precio);
  producto.appendChild(botonComprar);


  document.querySelector("div.lista").appendChild(producto);

}


/* <div class="item1">
        <div class="item-box">
          <img class="item-img" src="img/tienda/4.png" alt="Tarjeta">
          <div>
            <h4 class="item-title">Nuestra tarjeta</h4>
            <p>Aliqu diam amet diam et eos. Clita erat ipsum lorem eipsum lorem sit sed</p>
            <h4 class="item-text">$350.00</h4>
            <button class="carrito" id="p1">COMPRAR</button>
          </div>
        </div>
      </div> */
