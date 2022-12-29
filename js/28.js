// Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene precio de: ${this.precio}`;
    }
    obtenerPrecio() {
        console.log(this.precio);
    }
}

const producto2 = new Producto('Monitor 23"', 450, 'Monitor gaming curvo', true);
const producto3 = new Producto('Teclado mecanico', 50, 'Teclado mecanico switch ROJO', false);


// Herencia
class Libro extends Producto {
    constructor(nombre, precio,isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }
    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('SI hay existencias');
    }
}

const libro = new Libro('El camino de los Reyes', 15, 'TGF4566HYU');
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
console.log(producto2.formatearProducto());