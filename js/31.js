
  
const boton =  document.querySelector( '#boton' );

boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(resultado => console.log(`Resultado es: ${resultado}`))
});

if ( Notification.permission == 'granted' ) {
    new Notification('Esto es tu notificación', {
        icon: 'img/Uno.png',
        body: 'Programa en JS'
    })
}