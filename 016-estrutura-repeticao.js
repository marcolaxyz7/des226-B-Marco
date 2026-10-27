const entrada = require("prompt-sync")();

let contador = 0;

while (contador < 10) {
  console.log(contador);
  contador = contador + 1;
}

entrada("Pressione Enter para encerrar o programa!");
