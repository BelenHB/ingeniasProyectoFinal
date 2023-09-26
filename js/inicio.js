function iniciarSesion() {
    let usuario = prompt('Ingresa tu usuario: ')
    let password = prompt('Ingresa tu contraseña: \nRECUERDA: igual a tu usuario pero todo mayúsculas')
    return [usuario,password];
    }
  
  
  let datos= iniciarSesion();
  let tiempoRetraso;
  
  function funcionConRetraso() {
    alert( "bienvenido "+ datos[1]);
  }
  
  function temporizadorDeRetraso(a,b){
    let usuario = datos[0];
    let password = datos[1];
  
    if (usuario.toUpperCase() == password) {
      tiempoRetraso= setTimeout(funcionConRetraso, 2000);
      } else {
        alert('no funciona, tu contraseña es inválida. Prueba de nuevo!');
      }
  }
  
  temporizadorDeRetraso(datos[0], datos[1]);
