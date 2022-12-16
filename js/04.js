// String
const tweet = "Me gustan los Monitor de 20\"";

console.log(tweet);

const producto2 = String('Monitor 30"');

console.log(producto2);

const producto3 = new String('Monitor 30 pulgadas');

console.log(producto3);

console.log(tweet.length);
console.log(producto2.length);

// indexOf
console.log(tweet.indexOf('Monitor'));
console.log(producto2.indexOf('Tablet'));
// include devuelve true o false
console.log(tweet.includes('Monitor'));
console.log(producto2.includes('Tablet'));

