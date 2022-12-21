function sumar(n1,n2) {
    return n1 + n2;
}

const resultado = sumar(5,5);

console.log(resultado);


let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.21 * total;
}

total = agregarCarrito(250);
total = agregarCarrito(150);
console.log(total);

const totalAPagar = calcularImpuesto(total);
console.log(`Total a Pagar: ${totalAPagar}`);