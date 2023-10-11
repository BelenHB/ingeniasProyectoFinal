let productosJson = `[
  {
    "prodId": 0,
    "nombreProducto": "Nuestra tarjeta",
    "descripcion":"Para tu cuaderno, tu laptop o tu mochila. Decile al mundo que estás con nosotros.",
    "precio": 350,
    "imagen":"/img/tienda/4.png"
  },
  {
    "prodId": 1,
    "nombreProducto":"Buzo",
    "descripcion":"De algodón blanco con capucha, bolsillo canguro. Logo sublimado.",
    "precio":4000,
    "imagen":"/img/tienda/5.png"
  },
  {
    "prodId": 2,
    "nombreProducto":"Taza",
    "descripcion":"De cerámica blanca con logo. Capacidad 220ml.",
    "precio":1500,
    "imagen":"/img/tienda/6.png"
  }
]`;

let productosArray = JSON.parse(productosJson);
// console.log(productosArray);


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

let carrito = [];

function agregarAlCarrito(botonClickeado) {
  let productosElegidos = [];
  productosElegidos.push(botonClickeado.target.getAttribute("prodId"));
  let numeroProducto = Number(botonClickeado.target.getAttribute("prodId"));
  console.log(numeroProducto);
  carrito.push(productosArray[numeroProducto]);
  console.log(productosArray[numeroProducto]);
  return carrito; 
}

let verCarrito = document.getElementById("verCarrito");

verCarrito.onclick = function () {
  let comprado = document.createElement("div");
  comprado.className = "tarjetas";
  // console.log(carrito);
  let tituloCompra = document.createElement("h4");
  tituloCompra.innerText ="Tu carrito contiene:";
  let listaCompra = document.createElement("ul");
  for (x=0; x<carrito.length;x++) {
    let productosComprados = document.createElement("li");
    productosComprados.innerHTML = carrito[x].nombreProducto;
    listaCompra.appendChild(productosComprados);
  }
  // document.querySelector("#mostrar-carrito")
  let divCompra = document.querySelector("#mostrar-carrito");
  divCompra.appendChild(tituloCompra);
  divCompra.appendChild(comprado);
  comprado.appendChild(listaCompra);
};

