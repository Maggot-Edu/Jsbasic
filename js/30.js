// Promises

const usuarioAutenticado = new Promise( (resolve, reject) => { //resolve, rejecr se pasan automaticamente
    const auth = true;

    if (auth) {
        resolve('Usuario autentificado');  // El promise se cumple
    }else {
        reject('No se pudo autentificar');   // El promise no se cumple
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch(function(error) {
        console.log(error);
    })

// 3 valores posibles en Promise
// Pending: No se ha cumplido pero tampoco se ha rechazado
//Fullfilled: Ya se ha cumplido
// Rejected: Se ha rechazado o no se pudo cumplir
