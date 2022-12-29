

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

// foreach

carrito.forEach( producto => console.log(producto.precio));

//map

carrito.map( producto => console.log(producto.nombre));