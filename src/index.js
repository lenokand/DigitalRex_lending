// import 'owl.carousel';
// import './style/style.scss'
import 'bootstrap'
// import './wow.min.js'

const burger = document.getElementById('burger-menu')
const shadow = document.getElementById('shadow')
const menu = document.getElementById('main-menu')




const toggleMenu = () => {
    burger.classList.toggle('open')
    menu.classList.toggle('open')
    shadow.classList.toggle('open')
    services.classList.toggle('open')
}
burger.addEventListener('click', toggleMenu)
shadow.addEventListener('click', toggleMenu)



var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
var scene = document.getElementById('scene2');
var parallax = new Parallax(scene2);
var scene = document.getElementById('scene3');
var parallax = new Parallax(scene3);
var scene = document.getElementById('scene4');
var parallax = new Parallax(scene4);
var scene = document.getElementById('scene5');
var parallax = new Parallax(scene5);
var scene = document.getElementById('scene6');
var parallax = new Parallax(scene6);
var scene = document.getElementById('scene7');
var parallax = new Parallax(scene7);


let text = document.getElementById("contentSpoiler");
let link = document.getElementById("linkSpoiler");

link.addEventListener('click', function(e){
    e.preventDefault();
       if (text.style.display == "block") {
        text.style.display = "none";
        link.innerHTML = "подробнее..";
    } else {
        text.style.display = "block";
        link.innerHTML = "скрыть..";
    }

})


// выпадающее меню
let arrowMenu = document.querySelectorAll('.menu-item.level1 >.arrow_menu')
let menuItemsLev1 = document.querySelectorAll('.menu-item.level1')



menuItemsLev1.forEach( function(item, indexItem){
            
    console.log(item.hasChildNodes());

   
})


// arrowMenu.forEach( function (arrow, index) {
//         arrow.addEventListener('click', function(e) {
//         e.preventDefault();
          
//         menuItemsLev1.forEach( function(item, indexItem){
            
//             console.log( menuItemsLev1[index])
//             // console.log( menuItemsLev1[index])
//             // menuItemsLev1[index].classList.toggle('show')

           
//         })
//         // arrow.classList.toggle('show')
//         // console.log(1);
//             } )
    
// }) 
// console.log(arrowMenu);

// const services = document.getElementById("services");
// console.log(services);

// const toggleMenuItem = () => {
//     services.classList.toggle('open')
   
// }
// services.addEventListener('click', toggleMenuItem)


// const about = document.getElementById("about");
// console.log(about);


// const toggleMenuItem2 = () => {
//     about.classList.toggle('open')
   
// }
// about.addEventListener('click', toggleMenuItem2);
