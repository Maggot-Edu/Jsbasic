//"use strict";  //ueso estricto
const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio:         300,
    disponibilidad: true
}

//Object.freeze(producto); //no permite agregar propiedades nuevas, objeto congelado
// producto.imagen = 'imagen.png';


Object.seal(producto);

producto.precio = 'no hay';
delete producto.precio;

console.log(producto);



