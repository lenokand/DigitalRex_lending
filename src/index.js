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
if (scene) {
  var parallax = new Parallax(scene);
}

var scene2 = document.getElementById('scene2');
if (scene2) {
  var parallax = new Parallax(scene2);
}

var scene3 = document.getElementById('scene3');
if (scene3) {
  var parallax = new Parallax(scene3);
}

let scene_piramid1 = document.getElementById('scene_piramid1');
if (scene_piramid1) {
  let parallax = new Parallax(scene_piramid1);
}
let scene_piramid2 = document.getElementById('scene_piramid2');
if (scene_piramid2) {
  let parallax = new Parallax(scene_piramid2);
}

let scene_loop = document.getElementById('scene_loop');
if (scene_loop) {
  let parallax = new Parallax(scene_loop);
}
let scene_vk = document.getElementById('scene_vk');
if (scene_vk) {
  let parallax = new Parallax(scene_vk);
}
let scene_coin2 = document.getElementById('scene_coin2');
if (scene_coin2) {
  let parallax = new Parallax(scene_coin2);
}
let scene_like = document.getElementById('scene_like');
if (scene_like) {
  let parallax = new Parallax(scene_like);
}
let scene_google = document.getElementById('scene_google');
if (scene_google) {
  let parallax = new Parallax(scene_google);
}
let scene_yandex = document.getElementById('scene_yandex');
if (scene_yandex) {
  let parallax = new Parallax(scene_yandex);
}
let scene_money = document.getElementById('scene_money');
if (scene_money) {
  let parallax = new Parallax(scene_money);
}
let scene_key = document.getElementById('scene_key');
if (scene_key) {
  let parallax = new Parallax(scene_key);
}
let scene_cube = document.getElementById('scene_cube');
if (scene_cube) {
  let parallax = new Parallax(scene_cube);
}


/////////////////////
// переход по табам, инфо о специалистах

const tabContent2 = document.querySelectorAll('div[data-tabs]') //информация с фото
const tabContent3 = document.querySelectorAll('div[data-tabsTxt]') //информация с текстом
const tabNav = document.querySelectorAll('div[data-tabs-nav]') //навигация

if (tabContent2.length > 0) {
  tabContent2[0].classList.add('active')
}

if(tabContent3.length > 0) {
  tabContent3[0].classList.add('active')
}



tabNav.forEach((item, index) => {
  item.addEventListener("click", function () {
    makeActive(index)
  }, false)
})

function makeActive(a) {
  // переключение фото
  tabContent2.forEach((tab, index) => {

    if (tab.classList.contains('active') && tab != tabContent2[a] ) {
      
      tab.classList.remove('active')
      tabContent2[a].classList.add('active')
    } 
  })


  // if (tabContent2[a].classList.contains('active')) {
  // } else {
  //   tabContent2[a].classList.add('active')
  // }


  // переключение текста
  tabContent3.forEach((tab, index) => {

    if (tab.classList.contains('active') && tab != tabContent3[a] ) {
      
      tab.classList.remove('active')
      tabContent3[a].classList.add('active')
    } 

    // if (tab.classList.contains('active')) {
      
    //   tab.classList.remove('active')
    // }
  })

  // if (tabContent3[a].classList.contains('active')) {
  // } else {
  //   tabContent3[a].classList.add('active')
  // }

}






// переключение отзывов
const tabNavRew = document.querySelectorAll('.nav_item') //навигация

const tabContentRew = document.querySelectorAll('.content_item') //информация отзывов



tabNavRew.forEach((item, index) => {
  item.addEventListener("click", function () {
    makeActiveRev(index)
  }, false)
})

function makeActiveRev(a) {
  
  tabContentRew.forEach((tab, index) => {

    if (tab.classList.contains('active') && tab != tabContentRew[a] ) {
      
      tab.classList.remove('active')
      tabContentRew[a].classList.add('active')
    } 
  })

  tabNavRew.forEach((tab, index) => {

    if (tab.classList.contains('active') && tab != tabNavRew[a] ) {
      
      tab.classList.remove('active')
      tabNavRew[a].classList.add('active')
    } 
  })


}



// загрузка файла в форму
let Loadfield = document.querySelector('.file_load');
if(Loadfield) {
  let label = Loadfield.nextElementSibling,
  labelVal = label.querySelector('.field__file-fake').innerText;

  Loadfield.addEventListener('change', function (e) {
      let countFiles = '';
      if (this.files && this.files.length >= 1)
        countFiles = this.files.length;

      if (countFiles)
        label.querySelector('.field__file-fake').innerText = 'Файлов прикреплено: ' + countFiles;
      else
        label.querySelector('.field__file-fake').innerText = labelVal;
  });

}





    // переключение табов на странице контакты
const tabNavContact = document.querySelectorAll('.contacts_tab') //навигация

const tabContentContact = document.querySelectorAll('.cont-content_item') //информация отзывов



tabNavContact.forEach((item, index) => {
  item.addEventListener("click", function () {
    makeActiveContact(index)
  }, false)
})

function makeActiveContact(a) {
  
  tabContentContact.forEach((tab, index) => {

    if (tab.classList.contains('active') && tab != tabContentContact[a] ) {
      
      tab.classList.remove('active')
      tabContentContact[a].classList.add('active')
    } 
  })

  tabNavContact.forEach((tab, index) => {

    if (tab.classList.contains('active') && tab != tabNavContact[a] ) {
      
      tab.classList.remove('active')
      tabNavContact[a].classList.add('active')
    } 
  })


}

// выпадающее меню
let submenuButton = document.querySelector('.arrow_menu')

submenuButton.addEventListener("click", function(){

 
  // console.log(document.getElementsByClassName("submenu"));
  let x = document.querySelector(".main_menu > div .submenu")
  
  x.classList.toggle("show");

})


// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {

// if (!event.target.matches('.dropbtn')) {

//   var dropdowns = document.getElementsByClassName("submenu");
//   var i;
//   for (i = 0; i < dropdowns.length; i++) {
//     var openDropdown = dropdowns[i];
//     if (openDropdown.classList.contains('show')) {
//       openDropdown.classList.remove('show');
//     }
//   }
// }
// }


// переключение свитчера на странице контекстная реклама
// затемнение не активного блока


let switchBtn = document.querySelector('.switch_btn')
let blockMethods = document.querySelector('.methods_block')

switchBtn.addEventListener("click", function(){

console.log('dddd');
switchBtn.classList.toggle('active')
blockMethods.classList.toggle('active')
})

