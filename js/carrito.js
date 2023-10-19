let productosJson = `[
  {
    "prodId": 0,
    "nombreProducto": "Nuestra tarjeta",
    "descripcion":"Para tu cuaderno, tu laptop o tu mochila. Decile al mundo que estás con nosotros.",
    "precio": 350,
    "imagen":"img/tienda/4.png"
  },
  {
    "prodId": 1,
    "nombreProducto":"Buzo",
    "descripcion":"De algodón blanco con capucha, bolsillo canguro. Logo sublimado.",
    "precio":4000,
    "imagen":"img/tienda/5.png"
  },
  {
    "prodId": 2,
    "nombreProducto":"Taza",
    "descripcion":"De cerámica blanca con logo. Capacidad 220ml.",
    "precio":1500,
    "imagen":"img/tienda/6.png"
  }
]`;

let productosArray = JSON.parse(productosJson);
// console.log(productosArray);

// Visualizar los productos en el HTML
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
  botonComprar.setAttribute("prodId", i);
  botonComprar.addEventListener("click", agregarAlCarrito);

  imagen.src = productosArray[i].imagen;
  nombreProducto.innerText = productosArray[i].nombreProducto;
  descripcion.innerText = productosArray[i].descripcion;
  precio.innerText = "$"+productosArray[i].precio;
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


// Armar el carrito
let carrito = [];

function agregarAlCarrito(botonClickeado) {
  let productosElegidos = [];
  productosElegidos.push(botonClickeado.target.getAttribute("prodId"));
  // console.log(productosElegidos);
  let numeroProducto = Number(botonClickeado.target.getAttribute("prodId"));
  // console.log(numeroProducto);
  carrito.push(productosArray[numeroProducto]);
  // console.log(productosArray[numeroProducto]);
  // console.log(carrito);
  return carrito; 
}

let verCarrito = document.getElementById("verCarrito");

verCarrito.onclick = function () {
// Habilito el botón de "BORRAR CARRITO"
  if (carrito.length != 0) {
    document.getElementById("eliminarCarrito").disabled = false;
  } else {
    document.getElementById("eliminarCarrito").disabled = true;
  };

// Armado del html para visualizar el carrito
  document.querySelector("#mostrar-carrito").classList.remove('oculto');
  let comprado = document.createElement("div");
  comprado.className = "listado-compra";
  // console.log(carrito);
  let tituloCompra = document.createElement("h5");
  tituloCompra.className = 'titulo-carrito';
  tituloCompra.innerText ="TU CARRITO CONTIENE:";
  let listaCompra = document.createElement("ul");
  for (let x=0; x<carrito.length;x++) {
    // let productosComprados = document.createElement("li");
    // productosComprados.innerHTML = carrito[x].nombreProducto;
    // listaCompra.appendChild(productosComprados);
    listaCompra.innerHTML += `<li>
    <img src="${carrito[x].imagen}" width="50px" height="50px" alt="">
    <p>${carrito[x].nombreProducto}</p>
    <p>1 u.</p>
    <p>$${carrito[x].precio}</p>
  </li>`;
  }

  let totalDeCompra = document.createElement('h5');
  let total = 0;
  for (let x=0; x<carrito.length;x++) {
    let importe = Number(carrito[x].precio);
    console.log(importe);
    console.log(typeof(importe));
    console.log(x);
    total += importe;
  };
  totalDeCompra.innerText = `El total de tu compra es $${total}`;

  // document.querySelector("#mostrar-carrito")
  let divCompra = document.querySelector("#mostrar-carrito");
  divCompra.appendChild(tituloCompra);

  divCompra.appendChild(comprado);
 
  comprado.appendChild(listaCompra);

  comprado.appendChild(totalDeCompra);
  
  // verCarrito.disabled = true;
  // o podría ocultarse y aparecer el de agregar
  // faltaría hacer la función agregar
  // document.getElementById('agregarAlCarrito').classList.remove('oculto');

};

// Ejecución de BORRAR CARRITO
let borrarCarrito = document.getElementById("eliminarCarrito");

borrarCarrito.onclick = function (e) {
  e.preventDefault();
  // console.log(carrito);
  for (let i = 0;carrito.length;i++) {
    carrito.pop();
  }
  // console.log(carrito);
  document.querySelector("#mostrar-carrito").removeChild(document.querySelector('.titulo-carrito'));
  document.querySelector("#mostrar-carrito").removeChild(document.querySelector('.listado-compra'));
  document.querySelector("#mostrar-carrito").classList.add('oculto');
};


