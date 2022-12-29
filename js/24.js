//For Loops bucles


// for( let i = 0; i <= 10; i++) {
//     console.log(i);
// }
let aux = 0;
for( let i = 1; i <= 100; i++) {
    if ( i%2 == 0) {
        aux++;
        console.log(`El numero ${i} es PAR`);
    }else {
        console.log(`El numero ${i} es IMPAR`)
    }

}
console.log(aux);

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

for (let i = 0; i < carrito.length; i++) {
    console.log( carrito[i].nombre );
}

//while Loops bucles

// let i = 0;

// while (i < carrito.length) {
    
//     console.log( carrito[i].nombre );
//         i++;
// }


//do while Loops bucles

let i = 0;

do {
    console.log(i);

    i++;
} while ( i < 10 );