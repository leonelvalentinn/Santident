let botonmenu = document.getElementById("btn-menu");
let menu = document.querySelector(".menu"); 
let link = document.querySelectorAll(".menu_links");


botonmenu.addEventListener('click', function(){
    menu.classList.toggle('mostrar');
    for(let i = 0; i < link.length; i++){
       link[i].addEventListener('click', function(){
           menu.classList.remove('mostrar');
       })
    }
  
})


const btnContacto = document.querySelector('.icono_principal');
const caja = document.querySelector('.contactos');
let contacto = document.querySelector(".contacto"); 
btnContacto.addEventListener('click', function(){
    caja.classList.toggle('aparecer');
    contacto.style.display = "none";

})

const container = document.getElementById('container-modal');
const container1 = document.getElementById('container-modal-1');
const container2 = document.getElementById('container-modal-2');
const container3 = document.getElementById('container-modal-3');
const item = document.getElementById('item-modal');
const item1 = document.getElementById('item-modal-1');
const item2 = document.getElementById('item-modal-2');
const item3 = document.getElementById('item-modal-3');

document.getElementById('carillas').addEventListener('click', function () {
  item3.style.display = "flex";
  container3.style.width = "100%";
  container3.style.height = "100vh";
  document.getElementById('container-modal-3').style.animation = "showModal 0.3s linear forwards";
});
document.getElementById('limpieza').addEventListener('click', function () {
  item.style.display = "flex";
  container.style.width = "100%";
  container.style.height = "100vh";
  document.getElementById('container-modal').style.animation = "showModal 0.3s linear forwards";
});
document.getElementById('blanqueamiento').addEventListener('click', function () {
  item1.style.display = "flex";
  container1.style.width = "100%";
  container1.style.height = "100vh";
  document.getElementById('container-modal-1').style.animation = "showModal 0.3s linear forwards";
});
document.getElementById('diseno').addEventListener('click', function () {
  item2.style.display = "flex";
  container2.style.width = "100%";
  container2.style.height = "100vh";
  document.getElementById('container-modal-2').style.animation = "showModal 0.3s linear forwards";
});

document.getElementById('close').addEventListener('click', function() {
  document.getElementById('container-modal').style.animation = "quitarModal 0.8s linear forwards";
  container.style.width = "0";
  container.style.height = "0";
  item.style.display = "none";
})
document.getElementById('close-1').addEventListener('click', function() {
  document.getElementById('container-modal-1').style.animation = "quitarModal 0.8s linear forwards";
  container1.style.width = "0";
  container1.style.height = "0";
  item1.style.display = "none";
})
document.getElementById('close-2').addEventListener('click', function() {
  document.getElementById('container-modal-2').style.animation = "quitarModal 0.8s linear forwards";
  container2.style.width = "0";
  container2.style.height = "0";
  item2.style.display = "none";
})
document.getElementById('close-3').addEventListener('click', function() {
  document.getElementById('container-modal-3').style.animation = "quitarModal 0.8s linear forwards";
  container3.style.width = "0";
  container3.style.height = "0";
  item3.style.display = "none";
})


