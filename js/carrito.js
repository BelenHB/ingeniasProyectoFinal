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
  let numeroProducto = Number(botonClickeado.target.getAttribute("prodId"));
  carrito.push(productosArray[numeroProducto]);
  document.getElementById('verCarrito').disabled = false;
  console.log(carrito);
  return carrito; 
}

function armarCarrito () {
  document.querySelector("#mostrar-carrito").classList.remove('oculto');
  let comprado = document.createElement("div");
  comprado.className = "listado-compra";
  let tituloCompra = document.createElement("h5");
  tituloCompra.className = 'titulo-carrito';
  tituloCompra.innerText ="TU CARRITO CONTIENE:";
  let listaCompra = document.createElement("ul");
  for (let x=0; x<carrito.length;x++) {
    listaCompra.innerHTML += `<li>
    <img src="${carrito[x].imagen}" width="50px" height="50px" alt="">
    <p>${carrito[x].nombreProducto}</p>
    <p>1 u.</p>
    <p>$${carrito[x].precio}</p>
    </li>`;
  };
  
  // Para ver el importe total de la compra:
  let totalDeCompra = document.createElement('h5');
  let total = 0;
  for (let x=0; x<carrito.length;x++) {
    let importe = Number(carrito[x].precio);
    total += importe;
  };
  totalDeCompra.innerText = `El total de tu compra es $${total}`;
  
  // Se agregan los elem creado al html con el contenido
  let divCompra = document.querySelector("#mostrar-carrito");
  divCompra.appendChild(tituloCompra);
  divCompra.appendChild(comprado);
  comprado.appendChild(listaCompra);
  comprado.appendChild(totalDeCompra);
};


// Visualización del carrito:
let verCarrito = document.getElementById("verCarrito");

verCarrito.onclick = function () {
// Habilito el botón de "BORRAR CARRITO"
  if (carrito.length != 0) {
    document.getElementById("eliminarCarrito").disabled = false;
  } else {
    document.getElementById("eliminarCarrito").disabled = true;
  };

  armarCarrito();
  // Oculto el botón 'VER CARRITO' y visualizo el 'AGREGAR PRODUCTOS'
  document.getElementById('verCarrito').classList.add('oculto');
  document.getElementById('agregarProductos').classList.remove('oculto');
};

// Si ya tengo un carrito y le quiero agregar productos:
let agregarProductosAlCarrito = document.getElementById('agregarProductos');
agregarProductosAlCarrito.onclick = function () {
  // Elimimo el carrito previo y vuelvo a visualizar
  document.querySelector("#mostrar-carrito").removeChild(document.querySelector('.titulo-carrito'));
  document.querySelector("#mostrar-carrito").removeChild(document.querySelector('.listado-compra'));
  armarCarrito();
  };
 
  

// Ejecución de BORRAR CARRITO
let borrarCarrito = document.getElementById("eliminarCarrito");

borrarCarrito.onclick = function (e) {
  e.preventDefault();
  for (let i = 0;carrito.length;i++) {
    carrito.pop();
  }
  
  document.querySelector("#mostrar-carrito").removeChild(document.querySelector('.titulo-carrito'));
  document.querySelector("#mostrar-carrito").removeChild(document.querySelector('.listado-compra'));
  document.querySelector("#mostrar-carrito").classList.add('oculto');
  document.getElementById('verCarrito').classList.remove('oculto');
  document.getElementById('agregarProductos').classList.add('oculto');
  document.getElementById('verCarrito').disabled = true;
  document.getElementById("eliminarCarrito").disabled = true;
};

// Botón VER MÁS PRODUCTOS
let verMasProductos = document.getElementById('mas-productos');

verMasProductos.addEventListener('click', () => {
  alert('Por el momento no tenemos más productos disponibles.');
});