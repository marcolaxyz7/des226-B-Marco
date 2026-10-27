const entrada = require("prompt-sync")();

let fatorX = Number(entrada("Digite um numero para visualizar sua tabuada: "));

for (let fatorY = 0; fatorY <= 10; fatorY++) {
  const produto = fatorX * fatorY;
  console.log(`${fatorX} X ${fatorY} = ${produto}`);
}

entrada("Pressione ENTER para encerrar o programa!");
