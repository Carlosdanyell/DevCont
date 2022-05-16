/*Funcionalidade do ScrolReveal */
ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1500
  }).reveal(`
        #home .stat,
        #services,
        #services header,
        #services .card,
        #depositions header
  `);
  ScrollReveal({
    origin: 'left',
    distance: '100px',
    duration: 1500
  }).reveal(`
        #business-model header h4,
        #business-model header h2,
        #business-model header p,
        #business-model .content .step
  `);
  ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2500
  }).reveal(`
        #depositions .comments-cards
  `);
ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: 2000
}).reveal(`
        #services .differential li
`);

/*Funcionalidade do seletor de serviços */





/*Funcionalidade dos cards decomentario */
const buttonSlide1 = document.getElementById('button-slide1');
const buttonSlide2 = document.getElementById('button-slide2');

var cardsCommentari = document.querySelectorAll('.card-comment');
var arrayNode = Array.from(cardsCommentari)

var Card1 = arrayNode[0];
var Card2 = arrayNode[1];
var Card3 = arrayNode[2];
var Card4 = arrayNode[3];


const showComents1 = () =>{

    Card3.classList.remove('show');
    Card4.classList.remove('show');
    Card3.classList.add('hidden');
    Card4.classList.add('hidden');

    Card1.classList.add('show');
    Card2.classList.add('show');
    Card1.classList.remove('hidden');
    Card2.classList.remove('hidden');
  

    buttonSlide2.classList.remove('active')
    buttonSlide1.classList.add('active')

};
const showComents2 = () =>{

  Card1.classList.remove('show');
  Card2.classList.remove('show');
  Card1.classList.add('hidden');
  Card2.classList.add('hidden');


  Card3.classList.add('show');
  Card4.classList.add('show');
  Card3.classList.remove('hidden');
  Card4.classList.remove('hidden');

  buttonSlide1.classList.remove('active')
  buttonSlide2.classList.add('active')

};


buttonSlide1.addEventListener('click', showComents1);
buttonSlide2.addEventListener('click', showComents2);

