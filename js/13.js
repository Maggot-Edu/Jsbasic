const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio:         300,
    disponibilidad: true
}
const medidas = {
    pero:   '2kg',
    medida: '1m'
}

const nuevoProducto = { ...producto, ...medidas }; //crer un nuevo objedo juntando otros

console.log(producto);
console.log(nuevoProducto);