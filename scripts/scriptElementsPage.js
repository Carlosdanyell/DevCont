const btnMenu = document.getElementById('btn-menu-mobile');
const navigation = document.getElementById('menu');
const body = document.querySelector('body');
const header = document.querySelector('nav');
const linksMenu = document.querySelector('.navigation');

function toggleMenu (event){

 btnMenu.classList.toggle('activebtn')
 navigation.classList.toggle('active')
 body.classList.toggle('hidden')

}
function onScroll(){
    if(scrollY > 0){
        header.classList.add('scroll');
    }else{
        header.classList.remove('scroll');
    }
}


window.addEventListener('scroll', onScroll);
btnMenu.addEventListener('click', toggleMenu);
linksMenu.addEventListener('click', toggleMenu);
