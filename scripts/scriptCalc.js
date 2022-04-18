
/* --- Referencing DOM Elements such as Inputs, Buttons, and Outputs. ---*/ 
var inputValue = document.querySelector('#dinheiro');
var inputDescontos = document.querySelector('#inputDescontos');
var inputDpvalue = document.querySelector('#dependente');

/* --- Referencing DOM Elements such as Buttons. ---*/ 
var btnCalc = document.querySelector('#btn-calc');
var btnClear = document.querySelector('#btn-clear');

/* --- Referencing DOM Elements such as Outputs. ---*/ 
var vlrBruto = document.querySelector('#vlr-bruto');
var vlrDescontos = document.querySelector('#cel-table-desconto');
var aliquotaInss = document.querySelector('#ali-inss');
var aliquotaIrrf = document.querySelector('#ali-irrf');
var resultInss = document.querySelector('#result-inss');    
var resultIrrf = document.querySelector('#result-irrf');
var vlrTotalProventos = document.querySelector('#tl-proventos');
var tlDescontos = document.querySelector('#tl-descontos');
var resultSl = document.querySelector('#sl-liquido');



/* --- Main function in which it captures the input value and splits it into two calculation processes. ---*/ 
const calcValues =()=>{

   
 /* --- Validator input--- */    
    if(inputValue.value == ""){
        alert("insira um valor!")
        return 0
      };

    if(inputDpvalue.value == ""){
        inputDpvalue.value = 0;
    };
    if(inputDescontos.value == ""){
        inputDescontos.value = 0;
    }
 



var value = parseFloat(inputValue.value.replace(".","",).replace(",","."))
var valorDescontos = parseFloat(inputDescontos.value.replace(".","",).replace(",","."))
var quantDp = parseInt(inputDpvalue.value)
var valorDp = quantDp *189.59;


if(valorDescontos > value){
    alert('ops ... valor inválido! o desconto é maior que o salário')
    valorDescontos = 0;
}


/* --- Insert value of the inputs, "#dinheiro" and "#dependentes" , and fills in the table --- */
vlrBruto.innerHTML = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
vlrTotalProventos.innerHTML = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
vlrDescontos.innerHTML = valorDescontos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });





/* --- First calculation function, which results in a value that will be used for the second process. ---*/ 
function calcInss(value){
if(value<= 1212.00){

value = value *0.075;

}else if((value > 1212.00)&&(value<=2427.35)){

value = (value*0.09)-18.18;

}else if((value >2427.35)&&(value<=3641.03)){

value = (value*0.12)-91.00;

}else if((value >3641.03)&&(value<=7087.22)){

value =(value*0.14)-163.82;

}else if(value >7087.22){

value = 828.39

}  

function showResultCalc (result){

    result.toFixed(2);
    var valorFormatado = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    resultInss.innerText= valorFormatado;

};

showResultCalc(value);

return valorInss =[value] ; 

};

/* --- Second calculation function, based on input values ​​and the result of the first process. ---*/ 
function calcIrrf(value){


if((value<=1903.98)){

value = 0;

}else if((value>=1903.99)&&(value<=2826.65)){

value = (value*0.075)-142.80;

}else if((value>=2826.66)&&(value<=3751.05)){

value = (value*0.15)-354.80;

}else if((value>=3751.06)&&(value<=4664.68)){

value = (value*0.225)-636.13;

}else if(value>4664.68){

value = (value*0.275)-869.36;

};
console.log(value)

function showResultCalc (result){

    result.toFixed(2);
    var valorFormatado = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    resultIrrf.innerText= valorFormatado;
};

showResultCalc(value);

return valorIrrf =[value]; 

};

/* --- Last calculation function, based on results of the fist and second process. ---*/ 
function calcSl(value, vdesc){
var salaLq = value - vdesc;

function showResultCalc (result){
 result.toFixed(2);
    var valorFormatado = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    resultSl.innerText= valorFormatado;
};
showResultCalc(salaLq);
};


/* --- Call all function of calculation. --- */
calcInss(value);

var baseCalculoIrrf = value-valorInss[0]-valorDp;


calcIrrf(baseCalculoIrrf);

var descontos = valorInss[0] + valorIrrf[0] + valorDescontos;
tlDescontos.innerHTML = descontos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

calcSl(value, descontos);


var aliInss = ((valorInss[0] * 100)/value);
var aliIrrf = ((valorIrrf[0] * 100)/value);


aliquotaInss.innerHTML = aliInss.toFixed(2) + "%";
aliquotaIrrf.innerHTML = aliIrrf.toFixed(2) + "%";

};  
    

function reloadPage (){

    history.pushState({}, null , '/index.html#inicio');

    window.scrollTo({top:0, behavior:'smooth'})

    window.location.reload(true);
    inputValue.value = "";
    inputDescontos.value ="";
    inputDpvalue.value = "";

};



btnCalc.onclick = calcValues;
btnClear.onclick= reloadPage;