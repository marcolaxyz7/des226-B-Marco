let segundos = 0;

process.stdout.write(`Tempo decorrido: ${segundos} segundo(s)`);

const temporizador = setInterval(() => {
  segundos++;

  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  process.stdout.write(`Tempo decorrido: ${segundos} segundo(s)`);

  if (segundos === 15) {
    clearInterval(temporizador);
    process.stdout.write("\nTempo limite de 15 segundos atingido!\n");
  }
}, 1000);
