//arrow function

const sumar2 = (n1, n2) => console.log( n1 + n2 );

sumar2(10,95);

const aprendiendo = tecno => console.log(`Aprendiendo ${tecno}`);
aprendiendo('JS');

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

meses.forEach( mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});


// some para objetos
let resultado2;
resultado2 = carrito.some( producto => producto.nombre === 'Raton');
console.log(resultado2);

// reduce
let resultado3 = carrito.reduce( (total, producto) => total + producto.precio, 0 );
console.log(resultado3);

// Filter
resultado3 = carrito.filter( producto => producto.precio >400 );
console.log(resultado3);