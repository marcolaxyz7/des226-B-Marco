let entrada = require("prompt-sync")();

console.log("-----------------------------------");
console.log("-------------ATIVIDADE-1-----------");
console.log("-----------------------------------");

let n1 = entrada("Insira um numero: ");

console.log("");

if (n1 % 2 === 0) {
  console.log("Este numero é par!");
} else {
  console.log("Este numero é impar!");
}

console.log("");

if (n1 > 0) {
  console.log("O numero é Positivo!");
} else if (n1 < 0) {
  console.log("O numero é Negativo!");
} else {
  console.log("O numero é Zero!");
}

console.log("");
console.log("-----------------------------------");
console.log("-------------ATIVIDADE-2-----------");
console.log("-----------------------------------");
console.log("");

let us1 = entrada("Digite sua Idade: ");

console.log("");

console.log("Voçê está Acompanhado?");
let us2 = entrada("S para Sim / N para Não: ").toUpperCase() === "S";
let bloqueado = false;

console.log("");

if (bloqueado) {
  console.log("Acesso Bloqueado");
} else if (us1 >= 18 || us2) {
  console.log("Acesso Liberado");
} else {
  console.log("Acesso Negado");
}

console.log("");
console.log("-----------------------------------");
console.log("-------------ATIVIDADE-3-----------");
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
console.log("-------------ATIVIDADE-4-----------");
console.log("-----------------------------------");
console.log("");

console.log("Item 1: Café Espresso - Valor: R$ 6,00");
console.log("Item 2: Capuccino Cremoso - Valor: R$ 9,50");
console.log("Item 3: Suco Natural de Laranja - Valor: R$ 8,00");
console.log("Item 4: Soda Italiana de Maçã Verde - Valor: R$ 12,00");
console.log("");
const codigoProduto = entrada("Digite o codigo do produto de 1 a 4: ");
console.log("");

switch (codigoProduto ? codigoProduto.toUpperCase() : "") {
  case "1":
    console.log("Item: Café Espresso - Valor: R$ 6,00");
    break;
  case "2":
    console.log("Item: Capuccino Cremoso - Valor: R$ 9,50");
    break;
  case "3":
    console.log("Item: Suco Natural de Laranja - Valor: R$ 8,00");
    break;
  case "4":
    console.log("Item: Soda Italiana de Maçã Verde - Valor: R$ 12,00");
    break;
  default:
    console.log("Erro: Código de produto inexistente ou inválido.");
}

console.log("");
console.log("-----------------------------------");
console.log("-------------ATIVIDADE-5-----------");
console.log("-----------------------------------");
console.log("");

const valorCompra = +entrada(
  "Digite o valor total da sua compra (ex: 160.00):",
);

const valorFrete = valorCompra > 150.0 ? 0.0 : 20.0;

const totalAPagar = valorCompra + valorFrete;

console.log(`Valor da Compra: R$ ${valorCompra.toFixed(2)}`);
console.log(`Valor do Frete: R$ ${valorFrete.toFixed(2)}`);
console.log(`Total a Pagar: R$ ${totalAPagar.toFixed(2)}`);

console.log("");
console.log("-----------------------------------");
console.log("");
