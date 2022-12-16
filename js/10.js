// Objetos

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio:         300,
    disponibilidad: true
}

console.log(producto);

// console.log(producto.precio);

// console.log(producto['disponibilidad']);

//añadir propiedades
producto.imagen = 'imagen.png';

console.log(producto);
//eliminar propiedades
delete producto.precio;
console.log(producto);