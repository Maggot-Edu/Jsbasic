//POO

// literal object
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Dinamico

function Producto(nombre, precio, descripcion, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.disponible = disponible;
}
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene precio de: ${this.precio}`;
}

const producto2 = new Producto('Monitor 23"', 450, 'Monitor gaming curvo', true);
const producto3 = new Producto('Teclado mecanico', 50, 'Teclado mecanico switch ROJO', false);


console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

