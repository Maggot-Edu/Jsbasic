// Objetos

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio:         300,
    disponibilidad: true
}
// forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;
// console.log(precioProducto);
// console.log(nombreProducto);

// Distructuring

const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);
