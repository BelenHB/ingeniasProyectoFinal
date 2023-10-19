// Deshabilitar boton de enviar si no está completo

let formulario = document.getElementById('formulario');
let inputs = document.querySelectorAll('#formulario input');
// [input... , input ..]

let valoresEntrada = {
  nombre: false,
  mail: false,
  botonChecked: false,
  botonRadio: false
};


// expresion regular para validar mail
let expRegMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/;


const validarEntrada = (e) => {
  const sendBtn = document.getElementById("enviar");
  let name = e.target.name
  switch (name) {
    case 'nombre':
      let inputNombre=document.querySelector("#nombre")
      let valorNombre = inputNombre.value;
      if (valorNombre.length < 3) {
        document.querySelector(".campo-incorrecto").classList.remove('oculto');
        inputNombre.classList.remove("is-valid");
        valoresEntrada[name] = false;
      } else {
        document.querySelector(".campo-incorrecto").classList.add('oculto');
        inputNombre.classList.add("is-valid")
        valoresEntrada[name] = true;
      };
      break;
    case 'mail':
      let inputMail=document.querySelector("#mail")
      let valorMail = inputMail.value;
      if (!(expRegMail.test(valorMail))) {
        document.querySelector(".campo-incorrecto-mail").classList.remove('oculto');
        inputMail.classList.remove("is-valid");
        valoresEntrada[name] = false;
      } else {
        document.querySelector(".campo-incorrecto-mail").classList.add('oculto');
        inputMail.classList.add("is-valid");
        valoresEntrada[name] = true;
      };
      break;
  }


  // busco los inputs de botones checked y radio
  // let opciones = document.querySelectorAll('.botones-opciones input');

  let botonesCheck = document.querySelectorAll('input[type=checkbox]:checked');
  if (botonesCheck.length == 0) {
    document.querySelector(".campo-checked").classList.remove('oculto');
  } else {
    valoresEntrada.botonChecked = true;
    document.querySelector(".campo-checked").classList.add('oculto');
  };

  let botonesRadio = document.querySelectorAll('input[type=radio][name=direccion]:checked');
  if (botonesRadio.length == 0) {
    document.querySelector(".campo-radio").classList.remove('oculto');
  } else {
    valoresEntrada.botonRadio = true
    document.querySelector(".campo-radio").classList.add('oculto');
  }

  // Habilita el botón enviar si es todo true
  
  (valoresEntrada.nombre && valoresEntrada.mail && valoresEntrada.botonChecked && valoresEntrada.botonRadio)?sendBtn.disabled=false:sendBtn.disabled=true; 

};

// Por cada input ejecuto una comprobación
inputs.forEach((input) => {
  input.addEventListener('input', validarEntrada);
});



// Se ejecuta al presionar enviar
formulario.addEventListener('submit', (e) => {
  e.preventDefault();

// Modificación del div de formulario al presionar enviar
  let inputNombre = document.querySelector("input#nombre").value;
  let inputMail = document.querySelector("input#mail").value;
  sessionStorage.setItem("usuario", inputNombre);
  sessionStorage.setItem("mail", inputMail);
  document.querySelector(".formulario").innerHTML = `<p>Gracias <span><b> ${sessionStorage.getItem("usuario")}</b><span>.</p><p>Tus datos han sido enviados.</p>
  <p>Nos contactaremos a la brevedad al correo <span><b>${sessionStorage.getItem("mail")}  <span><b></p>`;

// estilos al div
  document.querySelector(".formulario").classList.add('div-enviado');

  let nuevosBotones = document.createElement("div");
  nuevosBotones.id = "nuevoDiv";
  nuevosBotones.style.display ="flex";
  nuevosBotones.style.justifyContent = "space-around";
  nuevosBotones.style.margin = "1rem auto";

  let botonVolver =document.createElement("button");
  botonVolver.innerHTML = "<a href='index.html' style='text-decoration:none;   color:#f2f2f2; font-size:1rem'>INICIO</a>";
  botonVolver.className = "button";

  let botonNuevoForm =document.createElement("button");
  botonNuevoForm.innerHTML = "<a href='contacto.html' style='text-decoration:none;   color:#f2f2f2; font-size:1rem'>NUEVO FORMULARIO</a>";
  botonNuevoForm.className = "button";

  document.querySelector(".formulario").appendChild(nuevosBotones);
  document.getElementById("nuevoDiv").appendChild(botonVolver);
  document.getElementById("nuevoDiv").appendChild(botonNuevoForm);

});





