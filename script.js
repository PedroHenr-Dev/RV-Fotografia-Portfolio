

const menuBarras = document.querySelector('.menu-barras');
menuBarras.addEventListener('click',()=>{
    toggleMenu();
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');
    menuBarras.classList.toggle('change');

    if (menuBarras.classList.contains('change')) {
        nav.style.display = 'block';

} else{
    nav.style.display = 'none';
}


}