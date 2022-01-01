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

   
}); // end