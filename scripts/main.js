/*Funcionalidade do ScrolReveal */
ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1500
  }).reveal(`
        #home header,
        #home .content,
        #home .stat,
        #services,
        #services header,
        #services .card,
        #depositions header
  `);
  ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: 1800
  }).reveal(`
        #business-model header h4,
        #business-model header h2,
        #business-model header p
  `);

// reveal cards of section #services >> differential
  ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2500
  }).reveal(`
        #home img,
        #services .differential .card-left
  `);

  ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2500
  }).reveal(`
        #services .differential .card-bottom
  `);

  ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2500
  }).reveal(`
        #depositions .comments-cards
  `);

/*Funcionalidade do seletor de serviços */

const btnService1 = document.getElementById('contabilidade-completa');
const btnService2 = document.getElementById('consultoria');
var secservice1 = document.getElementById('secservice1');
var secservice2 = document.getElementById('secservice2');

function showSecService1(){

    btnService2.classList.remove('selected')
    btnService1.classList.add('selected')

    secservice2.classList.remove('showing')
    secservice2.classList.add('hidden')

    secservice1.classList.remove('hidden')
    secservice1.classList.add('showing')
};

function showSecService2(){

  btnService1.classList.remove('selected')
  btnService2.classList.add('selected')

  secservice1.classList.remove('showing')
  secservice1.classList.add('hidden')

  secservice2.classList.remove('hidden')
  secservice2.classList.add('showing')
};

btnService1.addEventListener('click',showSecService1);
btnService2.addEventListener('click',showSecService2);


/*Funcionalidade do accordion */

const buttonsAccordion = document.querySelectorAll('.accordion-button');


function showAccordion1(){
 var contenAccordion = document.getElementById('flush-collapseOne')

  buttonsAccordion[0].classList.toggle('active')

  contenAccordion.classList.toggle('content-accordion-hidden')
  contenAccordion.classList.toggle('content-accordion-show')

};
function showAccordion2(){
  var contenAccordion = document.getElementById('flush-collapseTwo')

   buttonsAccordion[1].classList.toggle('active')

   contenAccordion.classList.toggle('content-accordion-hidden')
   contenAccordion.classList.toggle('content-accordion-show')

 };
 function showAccordion3(){
  var contenAccordion = document.getElementById('flush-collapseThree')

   buttonsAccordion[2].classList.toggle('active')
  
   contenAccordion.classList.toggle('content-accordion-hidden')
   contenAccordion.classList.toggle('content-accordion-show')
 
 };

buttonsAccordion[0].addEventListener('click', showAccordion1)
buttonsAccordion[1].addEventListener('click', showAccordion2);
buttonsAccordion[2].addEventListener('click', showAccordion3);