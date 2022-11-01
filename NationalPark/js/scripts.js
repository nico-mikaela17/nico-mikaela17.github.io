function toggleMenu(){
    document.getElementById("navList").classList.toggle("open");

}

const x = document.getElementById("hamburgerB");

x.onclick = toggleMenu;