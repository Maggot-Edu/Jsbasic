// Async / Await


function descargarNuevoClientes() {
    return new Promise( resolve => {
        console.log('Descargarndo clientes...');


        setTimeout( () => {
            resolve('Clientes decargados');
        }, 5000);
    })
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargarndo pedidos...');


        setTimeout( () => {
            resolve('Se han descargado los pedidos');
        }, 2000);
    })
}

async function app() {
    try {
        // const clientes = await descargarNuevoClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([ descargarNuevoClientes(), descargarUltimosPedidos() ]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

// setTimeout( function() {
//     console.log('set timeout...');
// }, 5000);