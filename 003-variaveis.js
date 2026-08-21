let entrada = require("prompt-sync")();

let nome = "Marco";
let idade = 22;
let trabalho = true;
let endereco = {
  rua: "brasil",
  num: 40,
  bairro: "centro",
};
let funcao = () => console.log("oi");

console.log("Tipos de variáveis");
console.log("Vaiável: nome: " + typeof nome);
console.log("Vaiável: idade: " + typeof idade);
console.log("Vaiável: trabalho: " + typeof trabalho);
console.log("Vaiável: endereco: " + typeof endereco);
console.log("Vaiável: funcao: " + typeof funcao);

let nomeDigitado;
let idadeDigitada;
let trabalhoDigitado;

console.log();

nomeDigitado = entrada("Digite seu nome: ");
idadeDigitado = entrada("Qual sua idade? ");
trabalhoDigitado = entrada("Voçê trabalha? ");

//Mostrando valor e tipo das variaveis
console.log("Nome: " + nomeDigitado + " - Tipo: " + typeof nomeDigitado);
console.log("Nome: " + idadeDigitado + " - Tipo: " + typeof idadeDigitado);
console.log("Nome: " + trabalhoDigitado + " - Tipo: " + typeof trabalhoDigitado);

// let conteudoDigitado = entrada('Digite uma frase: ');

// console.log(conteudoDigitado);
