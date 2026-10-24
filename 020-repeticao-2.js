let i = 1;

console.log("Iniciando contagem na mesma linha...\n");

const intervalo = setInterval(() => {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  process.stdout.write(`Contagem: ${i}`);

  if (i === 10) {
    clearInterval(intervalo);
    console.log("\n\n Fim da contagem!");
  }

  i++;
}, 3000);
