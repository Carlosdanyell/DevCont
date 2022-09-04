var btnMenu = document.getElementById('btn-menu-mobile');
var navigation = document.getElementById('menu');
var body = document.querySelector('body');
var header = document.querySelector('nav');
var linksMenu = document.querySelector('.navigation');
var btnContactMenu = document.getElementById('btn-contact-menu')
var BackToTopBtn = document.getElementById('backToTopBtn')

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
btnContactMenu.addEventListener('click', toggleMenu);
