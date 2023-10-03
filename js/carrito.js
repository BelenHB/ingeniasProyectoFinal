let productos = [
  {
    id: 1,
    nombreProducto: "Nuestra tarjeta",
    descripcion:"Para tu cuaderno, tu laptop o tu mochila. Decile al mundo que estás con nosotros.",
    precio: 350
  },
  {
    id: 2,
    nombreProducto:"Buzo",
    descripcion:"De algodón blanco con capucha, bolsillo canguro. Logo sublimado.",
    precio:4000,
  },
  {
    id: 3,
    nombreProducto:"Taza",
    descripcion:"De cerámica blanca con logo. Capacidad 220ml.",
    precio:1500,
  }
];



let carrito = [];

document.getElementById("p1").addEventListener("click", function() {
  carrito.push(productos[0]);
});

document.getElementById("p2").addEventListener("click", function() {
  carrito.push(productos[1]);
});

document.getElementById("p3").addEventListener("click", function() {
  carrito.push(productos[2]);
});


// mostrar carrito por consola
document.getElementById("verCarrito").addEventListener("click", function() {
  console.log(carrito);
});



