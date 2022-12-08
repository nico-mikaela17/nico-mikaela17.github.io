const hb = document.querySelector('#hamburgerB');

hb.addEventListener('click',() => {
  document.querySelector('#navList').classList.toggle('open')
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