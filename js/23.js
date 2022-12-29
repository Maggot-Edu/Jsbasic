// Switch


const metPago = 'efectivo';

switch( metPago ) {
    case 'tarjeta':
        console.log('Pago con tarjeta');
        break;
    case 'cheque':
        console.log('Cheque se revisaran los fondos antes');
        break;
    case 'efectivo':
        console.log('Pago en efectivo');
        break;
    default:
        console.log('Sin metodo de pago');
        break;
}