// this


const reserva = {
    nombre:     'Eduard',
    apellido:   'Badoyan',
    total:      5420,
    pagado:     false,
    infoirmacion: function () {
        console.log(`El cleinte ${this.nombre} reservó y cantidad a pagar es ${this.total}`);
    }
}

const reserva2 = {
    nombre:     'Daniel',
    apellido:   'Crespo',
    total:      5454,
    pagado:     false,
    infoirmacion: function () {
        console.log(`El cleinte ${this.nombre} reservó y cantidad a pagar es ${this.total}`);
    }
}

reserva.infoirmacion();
reserva2.infoirmacion();