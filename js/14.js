// arrays

const numero = [10, 20, 35, 46, 485, 654];
console.table(numero);

const meses =  new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

// const vector = ['nano', 43, false, 'no', null, {nombre: 'Eduard', trabajo: 'Informatico'}, [1,2,3]];
// console.table(vector);

// console.log(numero[4]);

// //Longitud array
// console.log(vector.length);

// listar un array
// numero.forEach(function(numero){
//     console.log(numero);
// });

numero.push(98, 15, 3); //añade dato al final del array
numero.unshift(-15, 2, -8); // añade datos al principio del array
console.table(numero);

meses.pop(); //elimina el ultimo daro del array
meses.shift();  // elimina el primer dato del array

meses.splice(2, 1);
console.table(meses);

// Rest Operator o Spread Operator

const nuevoArray = [...meses, 'Junio'];
console.log(nuevoArray);