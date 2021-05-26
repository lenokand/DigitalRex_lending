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
        //   slidesToShow: 3,
        //   slidesToScroll: 3,


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
  });

  // $(document).ready(function(){
  //     $('.tabs-right_bottomn').slick({
  //         slidesToShow: 3,
  //         slidesToScroll: 3,


  //         slide: '.tabWorker',
  //         dots: false,
  //         infinite: false
  //         // arrows: true,
  //         // nextArrow:true,
  //         // prevArrow:true,
  //         // responsive: [
  //         //     {
  //         //       breakpoint: 1024,
  //         //       settings: {
  //         //         slidesToShow: 3

  //         //       }
  //         //     },
  //         //     {
  //         //       breakpoint: 600,
  //         //       settings: {
  //         //         slidesToShow: 2,

  //         //       }
  //         //     },
  //         //     {
  //         //       breakpoint: 480,
  //         //       settings: {
  //         //         slidesToShow: 1,

  //         //       }
  //         //     }
  //         //     // You can unslick at a given breakpoint now by adding:
  //         //     // settings: "unslick"
  //         //     // instead of a settings object
  //         //   ]

  //     });
  //   });