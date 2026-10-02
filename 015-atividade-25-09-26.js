let entrada = require("prompt-sync")();

// let n1 = entrada("Insira um numero: ");

// console.log("");

// if (n1 % 2 === 0) {
//   console.log("Este numero é par!");
// } else {
//   console.log("Este numero é impar!");
// }

// console.log("");

// if (n1 > 0) {
//   console.log("O numero é Positivo!");
// } else if (n1 < 0) {
//   console.log("O numero é Negativo!");
// } else {
//   console.log("O numero é Zero!");
// }

// console.log("");
// console.log("------------------------------------------------");
// console.log("");

// let us1 = entrada("Digite sua Idade: ");

// console.log("");

// console.log("Voçê está Acompanhado?");
// let us2 = entrada("S para Sim / N para Não: ").toUpperCase() === "S";
// let bloqueado = false;

// console.log("");

// if (bloqueado) {
//   console.log("Acesso Bloqueado");
// } else if (us1 >= 18 || us2) {
//   console.log("Acesso Liberado");
// } else {
//   console.log("Acesso Negado");
// }

console.log("");
console.log("-----------------------------------");
console.log("");

let nota1 = entrada("Primeira nota: ");
let nota2 = entrada("Segunda nota: ");
let nota3 = entrada("Terceira nota: ");

media = (nota1 + nota2 + nota3) / 3;
console.log(`Média do aluno: ${media.toFixed(2)}`);

if (
  nota1 < 0 ||
  nota1 > 10 ||
  nota2 < 0 ||
  nota2 > 10 ||
  nota3 < 0 ||
  nota3 > 10
) {
  console.log("Erro: Digite valores entre 0 e 10.");
} else {
  if ((media) => 7) {
    console.log("Aprovado");
  } else if ((media) => 5 && media < 7) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}

console.log("");
console.log("-----------------------------------");
console.log("");
