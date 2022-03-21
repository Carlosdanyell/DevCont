function formatarMoeda1() {
    var elemento = document.getElementById('dinheiro');
    var valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
};


function formatarMoeda2() {
    var elemento2 = document.getElementById('inputDescontos');
    var valor2 = elemento2.value;

    valor2 = valor2 + '';
    valor2 = parseInt(valor2.replace(/[\D]+/g, ''));
    valor2 = valor2 + '';
    valor2 = valor2.replace(/([0-9]{2})$/g, ",$1");

    if (valor2.length > 6) {
        valor2 = valor2.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento2.value = valor2;
    if(valor2 == 'NaN') elemento2.value = '';
};