//Metodos y propiedades

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproducioendo Cancion con el ID: ${id}`)
    },
    pausar: function() {
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando Playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo: ${nombre}`)
    },
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando cancion ${id}`)
}

reproductor.reproducir(523);
reproductor.pausar();
reproductor.borrarCancion(54);
reproductor.crearPlaylist('Cumbia');
reproductor.reproducirPlaylist('Cumbia');