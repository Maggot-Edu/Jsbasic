// declarqacion funcion
sumar();
function sumar () {

    console.log(5+5);

}

// Expresion de funcion

const sumar2 = function() {
    console.log(3+3);
}

sumar2();

// IIFE Se invocan a si mismo

(function() {
    console.log('Function bien chunga');
})();