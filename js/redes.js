// function irInstagram() {
//   let a = document.createElement("a");
//   a.setAttribute("href", "http://www.instagram.com");
//   // let aTexto = document.createTextNode("Instagram");
//   // a.appendChild(aTexto);

//   let clickInst = document.querySelector("#insta").innerHTML += a
//   // '<a class="redes" href="https://www.instagram.com/" target="_blank"></a>'
//   document.body.appendChild(clickInst);
  
     
//   // document.body.appendChild(a);
  
// }



function irInstagram()	{
  let ins = document.getElementById("insta");
  ins.addEventListener("click", function (event) {
    // document.getElementById("insta").innerHTML = 
    ins.href = "https://www.instagram.com/"; 
    event.preventDefault();
  })
}

// let links = document.querySelector (‘a’);
// links.addEventListener(‘click’, function(event){
// console.log(‘hiciste click’)
// event.preventDefault();
// });

