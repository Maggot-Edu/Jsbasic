//Array Methods

const meses =  new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 512},
    {nombre: 'Raton', precio: 45},
    {nombre: 'Microfono usb', precio: 12},
    {nombre: 'Procesador i9', precio: 745},
    {nombre: 'Processador Ryzen 5', precio: 185},
    {nombre: 'Auriculares diadema', precio: 56},
    {nombre: 'Movil Samsung S22', precio: 350},
    {nombre: 'Portatil Asus Gaming', precio: 899},
    {nombre: 'Teclado mecanico', precio: 150}
];

//foreach

meses.forEach(function(mes){
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

//Includes
const resultado = meses.includes('Diciembre');
console.log(resultado);
// some para objetos
let resultado2;
resultado2 = carrito.some(function(producto) {
    return producto.nombre === 'Raton';
}, 0);
console.log(resultado2);

// reduce
let resultado3 = carrito.reduce(function(total, producto){
    return total + producto.precio;
}, 0);
console.log(resultado3);

// Filter
resultado3 = carrito.filter(function(producto) {
    return producto.precio >400;
});
console.log(resultado3);