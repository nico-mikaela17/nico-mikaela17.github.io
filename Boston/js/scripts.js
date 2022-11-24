const hb = document.querySelector('#hamburgerB');
const pn = document.querySelector('#navList');

hb.addEventListener('click',() => {
    hb.classList.toggle('open');
    pn.classList.toggle('open'); 
}
);
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed:2000,
    loop: true,
    autoplay:{
      delay:5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
})