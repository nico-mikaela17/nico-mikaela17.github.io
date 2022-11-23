const hb = document.querySelector('#hamburgerB');
const pn = document.querySelector('#navList');

hb.addEventListener('click',() => {
    hb.classList.toggle('open');
    pn.classList.toggle('open'); 
}
);