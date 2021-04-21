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
var scene2 = document.getElementById('scene2');
var parallax = new Parallax(scene2);
var scene3 = document.getElementById('scene3');
var parallax = new Parallax(scene3);
