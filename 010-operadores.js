let entrada = require("prompt-sync")();

let strNum1 = entrada("Insira o 1° valor: ");
let strNum2 = entrada("Insira o 2° valor: ");

let num1 = parseInt(strNum1);
let num2 = parseInt(strNum2);

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = Math.trunc(num1 / num2);
let retroDivisao = num1 % num2;

console.log();
console.log(`Soma:  ${num1} + ${num2} = ${soma}`);
console.log(`Subtração:  ${num1} - ${num2} = ${subtracao}`);
console.log(`Multiplicação:  ${num1} * ${num2} = ${multiplicacao}`);
console.log(`Divisão:  ${num1} / ${num2} = ${divisao}`);
console.log(`RetroDivisão:  ${num1} % ${num2} = ${retroDivisao}`);
