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
               slidesToShow: 2,
               arrows: false,
               dots: true,
            }
         },
         {
            breakpoint: 769,
            settings: {
               slidesToShow: 1,
               arrows: false,
               dots: true,
            }
         },
         {
            breakpoint: 601,
            settings: {
               slidesToShow: 1,
               arrows: false,
               dots: true,
            }
         },
      ]
   });
});

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll();
   }, 100);
   $(document).ready(function () {
      $('.header__burger').click(function (event) {
         $('.header__burger, .menu').toggleClass('activeted');
         $('body').toggleClass('lock');
      });
   });
   $(document).ready(function () {
   
      $(window).scroll(function () {
         if ($(this).scrollTop() > 700) {
            $('.scrollup').fadeIn();
         } else {
            $('.scrollup').fadeOut();
         }
      });
   
      $('.scrollup').click(function () {
         $("html, body").animate({ scrollTop: 0 }, 600);
         return false;
      });
   
   });

}
$('a[href*="#"]').on('click', function (e) {
   e.preventDefault();

   $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
   }, 1500, '');
});


