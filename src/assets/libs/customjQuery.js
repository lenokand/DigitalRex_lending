  //  карусель 1 

  $('.slider1').owlCarousel({
      loop: true,
      // autoplay: true,
      autoplayTimeout: 3000,
      stagePadding: 0,
      // center: true,
      nav: true,
      navText: [$('.arrow-left '), $('.arrow-right')],
      dots: false,
      margin: 30,

      responsive: {
          0: {
              items: 1,
              center: true

          },
          993: {
              items: 2,
              center: false

          },
          1200: {
              items: 2,
              center: false
          },
          1330: {
              items: 3,
              center: true

          }
      }
  })


  // карусель 2
  $('.slider2').owlCarousel({
      loop: true,
      // autoplay: true,
      autoplayTimeout: 3000,
      stagePadding: 0,
      // center: true,
      nav: true,
      navText: [$('.slider-left '), $('.slider-right')],
      dots: false,
      margin: 30,

      responsive: {
          0: {
              items: 1,

          },
          1200: {
              items: 2,

          },
          1330: {
              items: 2,

          }
      }
  })

  // стрелочка на верх страницы 

  $(function () {

      $(window).scroll(function () {

          if ($(this).scrollTop() != 0) {

              $('#toTop').fadeIn();

          } else {

              $('#toTop').fadeOut();

          }

      });

      $('#toTop').click(function () {

          $('body,html').animate({
              scrollTop: 0
          }, 800);

      });

  });




  new WOW().init();

  jQuery(function ($) {

      $(".telephone").mask("+7 (000) 000-00-00");


  });



  $(document).ready(function () {
      $('.tabs-right_bottomn').slick({
          slidesToShow: 4,
          nextArrow: `  <div class="slick_arrow">
          <img src="img/arrow-right.svg" alt="">
      </div>`,
          prevArrow: '',
          slidesToScroll: 3,


          slide: '.tabWorker',
          dots: false,
          //   infinite: false


          // arrows: true,
          // nextArrow:true,
          // prevArrow:true,
          // responsive: [
          //     {
          //       breakpoint: 1024,
          //       settings: {
          //         slidesToShow: 3

          //       }
          //     },
          //     {
          //       breakpoint: 600,
          //       settings: {
          //         slidesToShow: 2,

          //       }
          //     },
          //     {
          //       breakpoint: 480,
          //       settings: {
          //         slidesToShow: 1,

          //       }
          //     }
          //     // You can unslick at a given breakpoint now by adding:
          //     // settings: "unslick"
          //     // instead of a settings object
          //   ]

      });
  });
  $(document).ready(function () {
      $('.works_carusel').slick({
          slidesToShow: 2,
          nextArrow: `<div class="slick_arrow">
          <img src="img/arrow-right.svg" alt="">
      </div>  `,
          prevArrow: `<div class="slick_arrow_left">
          <img src="img/arrow-right.svg" alt="arrow">
      </div>  `,
          //   slidesToScroll: 3,
          dots: false,
          slide: '.carusel-item',

      });
  });


  //   главный слайдер
//   $(document).ready(function () {
//       $('.fgfgfgf').slick({
//           slidesToShow: 1,
//           nextArrow: `  `,
//           prevArrow: `  `,
//           //   slidesToScroll: 3,
//           dots: false,
//           slide: '.slider-item111',
//           adaptiveHeight: true,
//         //   autoplay: true,
//         //   autoplaySpeed: 2000,

//       });
//   });

// $(document).ready(function(){
//     инициализация
  
//     // $('.testimonials-banner').on('beforeChange',function(event,slick,currentSlide,nextSlide){
//     //     string_current = '.img-'+currentSlide;
//     //     string_next = '.img-'+nextSlide;
//     //     $(string_current).css('transform','scale(1)');
//     //     $(string_next).css('transform','scale(1.2)');
//     // });
//   });


$(document).ready(function () {
    $('.slick_main_txt').slick({
        slidesToShow: 1,
        nextArrow: `  `,
        prevArrow: `  `,
        fade: true,
        //   slidesToScroll: 3,
        dots: false,
        infinite: true,
      //   autoplay: true,
      //   autoplaySpeed: 2000,
        // asNavFor: '.slider-for',
        // asNavFor: '.slick_more',
    });
    $('.slick_more').slick({
        slidesToShow: 1,
        nextArrow: `  `,
        prevArrow: `  `,
        fade: true,
        //   slidesToScroll: 3,
        dots: false,
        infinite: true,
      //   autoplay: true,
      //   autoplaySpeed: 2000,
        asNavFor: '.slick_main_txt',
    });

    $('.slike_vertical_txt').slick({
        slidesToShow: 1,
        nextArrow: ``,
        prevArrow: ``,
        fade: true,
        //   slidesToScroll: 3,
        dots: false,
        infinite: true,
      //   autoplay: true,
      //   autoplaySpeed: 2000,
        asNavFor: '.slick_more',
    });
    // $('.slike_gorisontal_txt').slick({
    //     slidesToShow: 1,
    //     nextArrow: `  `,
    //     prevArrow: `  `,
    //     fade: true,
    //     //   slidesToScroll: 3,
    //     dots: false,
    //     infinite: true,
    //   //   autoplay: true,
    //   //   autoplaySpeed: 2000,
    //     asNavFor: '.slike_vertical_txt',
    // });




    $('.slick_main_txt').on('beforeChange',function(event,slick,currentSlide,nextSlide){
        cur_temp = $('.bold_txt_un').eq(currentSlide).data().colorName;
        next_temp = $('.bold_txt_un').eq(nextSlide).data().colorName;
        $('#color_block').removeClass(cur_temp);
        $('#color_block').addClass(next_temp);
    })
});