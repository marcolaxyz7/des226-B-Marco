let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: ');
let profissao = entrada('Digite sua profissão: ');
let dataNascimento = entrada('Digite sua Data Nascimento: ');

console.log ('');
console.log ('Nome: ' + nome + ' --- ' + typeof(nome));
console.log ('');
console.log ('Profissão: ' + profissao + ' --- ' + typeof(profissao));
console.log ('');
console.log ('Data Nascimento: ' + dataNascimento + ' --- ' + typeof(dataNascimento));

entrada();