
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



