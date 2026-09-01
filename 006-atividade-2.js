let entrada = require('prompt-sync')();

let filme = entrada('Digite o nome do seu filme Favorito: ');
let nota = entrada('Que nota voçê da para esse filme (0-10): ');
let recomenda = entrada('Voçê recomendaria esse filme? (sim/não): ');

let bilheteria;
let numPaisesExibidos = null;
let notaInt = parseInt(nota, 10);
let recomendaBool = recomenda === 'Sim' ? true : false;
let ehNulo = numPaisesExibidos === null ? 'null' : 'outra coisa';

console.log ('');
console.log ('------------------------------------------------');
console.log ('Bilheteria: ' + typeof(bilheteria));
console.log ('');
console.log ('numPaisesExibidos: ' + typeof(numPaisesExibidos));
console.log ('');
console.log ('notaInt: ' + typeof(notaInt));
console.log ('');
console.log ('recomendaBool: ' + typeof(recomendaBool));
console.log ('------------------------------------------------');

entrada();


