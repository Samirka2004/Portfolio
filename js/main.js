$(function () {

   $('.carousel__inner').slick({
      arrows: true,
      prevArrow: '<button class="slick-btn slick-prev" type="button"><img src="images/left.png" alt="prev"></button>',
      nextArrow: '<button class="slick-btn slick-next" type="button"><img src="images/right.png" alt="next"></button>',
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 841,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 601,
            settings: {
               slidesToShow: 1
            }
         },
      ]
   });

});