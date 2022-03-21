const btnMenu = document.getElementById('btn-menu-mobile');

function toggleMenu (event){

    
 const navigation = document.getElementById('menu');

 navigation.classList.toggle('active');

}


btnMenu.addEventListener('click', toggleMenu);