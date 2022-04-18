const btnMenu = document.getElementById('btn-menu-mobile');
const navigation = document.getElementById('menu');
const headerPage = document.getElementById('center');

function toggleMenu (event){

 btnMenu.classList.toggle('activebtn')
 navigation.classList.toggle('active')
 headerPage.classList.toggle('active')

}


btnMenu.addEventListener('click', toggleMenu);
