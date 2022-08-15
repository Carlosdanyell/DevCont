const btnMenu = document.getElementById('btn-menu-mobile');
const navigation = document.getElementById('menu');
const body = document.querySelector('body');
const header = document.querySelector('nav');
const linksMenu = document.querySelector('.navigation');
const BackToTopBtn = document.getElementById('backToTopBtn')

function toggleMenu (event){

 btnMenu.classList.toggle('activebtn')
 navigation.classList.toggle('active')
 body.classList.toggle('hidden')

};

function onScroll(){
    showNavOnScroll()
    showBackToTopBtn()
};

function showNavOnScroll (){
    if(scrollY > 0){
        header.classList.add('scroll');
    }else{
        header.classList.remove('scroll');
    }
};

function showBackToTopBtn(){
    if(scrollY >900){
        BackToTopBtn.classList.add('show')
    }else{
        BackToTopBtn.classList.remove('show')
    }
}

window.addEventListener('scroll', onScroll);
btnMenu.addEventListener('click', toggleMenu);
linksMenu.addEventListener('click', toggleMenu);

