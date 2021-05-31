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

  //  на верх страницы 

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
          }, 500);

      });

  });




  new WOW().init();

  jQuery(function ($) {

      $(".telephone").mask("+7 (000) 000-00-00");


  });


  // slick
  $(document).ready(function () {

      // 
      $('.tabs-right_bottomn').slick({
          slidesToShow: 4,
          nextArrow: `  <div class="slick_arrow">
          <img src="img/arrow-right.svg" alt="">
            </div>`,
          prevArrow: '',
          slidesToScroll: 3,


          slide: '.tabWorker',
          dots: false,

            infinite: false


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
      // отзывы
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
          //   autoplay: true,
          //   autoplaySpeed: 200,
          //   fade: true,

      });



      // главный экран
      $('.slick_main_txt').slick({
          slidesToShow: 1,
          nextArrow: `  `,
          prevArrow: `  `,
          fade: true,
          //   slidesToScroll: 3,
          infinite: true,
          centerMode: true,
          speed: 800,
          autoplay: true,
          autoplaySpeed: 3000,
          slide: '.slick_main_item',
          dots: true,
          dotsClass:'tabs_nav',
          pauseOnHover: false

      });



      $('.slick_main_txt').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
          cur_temp = $('.slick_main_item').eq(currentSlide).data().colorName;
          next_temp = $('.slick_main_item').eq(nextSlide).data().colorName;
          $('#color_block').removeClass(cur_temp);
          $('#color_block').addClass(next_temp);
      })

  });