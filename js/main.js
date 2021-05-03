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
            if(!animItem.classList.contains('_anim-no-hide')) {
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

}