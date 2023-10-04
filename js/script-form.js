// Modificación del div de formulario al presionar enviar

let ejecutarEnviar = document.querySelector("#enviar");
ejecutarEnviar.onclick = function () {
  let inputNombre = document.querySelector("input#nombre").value;
  let inputMail = document.querySelector("input#mail").value;
  sessionStorage.setItem("usuario", inputNombre);
  sessionStorage.setItem("mail", inputMail);

  // document.querySelector(".formulario").innerHTML = `<p>Gracias <span><b> ${inputNombre}<span><b>.</p><p>Tus datos han sido enviados.</p>
  // <p>Nos contactaremos a la brevedad al correo <span><b>${inputMail}<span><b></p>`;

  document.querySelector(".formulario").innerHTML = `<p>Gracias <span><b> ${sessionStorage.getItem("usuario")}</b><span>.</p><p>Tus datos han sido enviados.</p>
  <p>Nos contactaremos a la brevedad al correo <span><b>${sessionStorage.getItem("mail")}<span><b></p>`;

  // estilos al div
  document.querySelector(".formulario").style.display = "flex-block";
  document.querySelector(".formulario").style.width = "90%";
  document.querySelector(".formulario").style.background = "#7DBF1B";
  document.querySelector(".formulario").style.color = "rgb(49 53 47)";
  document.querySelector(".formulario").style.fontSize = "2rem";
  document.querySelector(".formulario").style.fontStyle = "italic";
  document.querySelector(".formulario").style.textAlign = "center";

  let nuevosBotones = document.createElement("div");
  nuevosBotones.id = "nuevoDiv";
  nuevosBotones.style.display ="flex";
  nuevosBotones.style.justifyContent = "space-around";
  nuevosBotones.style.margin = "1rem auto";
  
  let botonVolver =document.createElement("button");
  botonVolver.innerHTML = "<a href='index.html' style='text-decoration:none; color:#f2f2f2; font-size:1rem'>INICIO</a>";
  botonVolver.style.margin = "0.3rem";
  botonVolver.style.backgroundColor ="#555";
  botonVolver.style.border = "none";
  botonVolver.style.borderRadius ="0.5rem";
  botonVolver.style.textDecoration = "none";
  
  let botonNuevoForm =document.createElement("button");
  botonNuevoForm.innerHTML = "<a href='contacto.html' style='text-decoration:none; color:#f2f2f2; font-size:1rem'>NUEVO FORMULARIO</a>";
  botonNuevoForm.style.margin = "0.3rem";
  botonNuevoForm.style.backgroundColor ="#555";
  botonNuevoForm.style.border = "none";
  botonNuevoForm.style.borderRadius ="0.5rem";
  botonNuevoForm.style.textDecoration = "none";


  document.querySelector(".formulario").appendChild(nuevosBotones);
  document.getElementById("nuevoDiv").appendChild(botonVolver);
  document.getElementById("nuevoDiv").appendChild(botonNuevoForm);
}




