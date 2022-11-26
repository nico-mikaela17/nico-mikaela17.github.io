const hb = document.querySelector('#hamburgerB');
const pw = document.querySelector('#pageWrapper')

hb.addEventListener('click',() => {
  pw.classList.toggle('moveOver');
}
);
