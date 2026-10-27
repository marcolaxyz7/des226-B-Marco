const entrada = require("prompt-sync")();

let contador = 0;

while (contador < 10) {
  console.log(contador);
  contador = contador + 1;
}

for (let n = 1; n < 10; n++) {
  console.log(n);
}

entrada("Pressione Enter para encerrar o programa!");
