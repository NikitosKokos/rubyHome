document.addEventListener('DOMContentLoaded', () => {
   // header
   const header = document.querySelector('.header');

   const callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
         header.classList.remove('_scroll');
      } else {
         header.classList.add('_scroll');
      }
   };

   const headerObserver = new IntersectionObserver(callback);
   headerObserver.observe(header);

   // mobile slider
   const mobSlider = document.querySelector('.partners__body');
   let mobSliderSwiper;

   const mobileSlider = () => {
      if(window.innerWidth < 992 && mobSlider.dataset.mobile === 'false') {
         mobSlider.classList.add('_swiper');
         BuildSlider();

         mobSliderSwiper = new Swiper(mobSlider, {
            loop: true,
            slidesPerView: 'auto',
            speed: 800,
            spaceBetween: 60,
         });
         
         mobSlider.dataset.mobile = 'true';
      }

      if(window.innerWidth >= 992){
         mobSlider.dataset.mobile = 'false';
         mobSlider.classList.remove('_swiper');

         if(mobSlider.classList.contains('swiper-container-inintialized')){
            mobSliderSwiper.destroy();
         }
      }
   }

   mobileSlider();

   window.addEventListener('resize', () => {
      mobileSlider();
   });

   // heart
   const hearts = document.querySelectorAll('.item-properties__heart');

   hearts.forEach(heart => {
      heart.addEventListener('click', () => {
         heart.classList.toggle('_active');
      });
   });

   // reviews
   const reviewsSliderSwiper = new Swiper('.reviews__body', {
      loop: true,
      slidesPerView: 2,
      speed: 800,
      spaceBetween: 30,
      pagination: {
         el: document.querySelector('.reviews__bullets'),
         type: 'bullets',
         clickable: true,
      },
      breakpoints: {
         0: {
            slidesPerView: 1,
            autoHeight: true,
         },
         767.98: {
            slidesPerView: 2,
            spaceBetween: 20,
            autoHeight: false,
         },
         991.98: {
            spaceBetween: 30,
         },
      },
   });
   
}); // end