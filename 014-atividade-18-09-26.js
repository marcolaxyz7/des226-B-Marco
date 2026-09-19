let entrada = require("prompt-sync")();

// 1. Cadastro dos 3 usuários usando variáveis simples
let user1Nome = "joao";
let user1Senha = "1234";
let user1Saldo = 500;

let user2Nome = "maria";
let user2Senha = "4321";
let user2Saldo = 1500;

let user3Nome = "pedro";
let user3Senha = "9999";
let user3Saldo = 0;

let acessoPermitido = false;
let saldoAtual = 0;
let nomeLogado = "";

console.log("Insira seus dados para acessar o sistema!");

let loginUsuario = entrada("Nome de usuário: ").toLowerCase();
let loginSenha = entrada("Senha: ");

if (loginUsuario === user1Nome && loginSenha === user1Senha) {
  acessoPermitido = true;
  saldoAtual = user1Saldo;
  nomeLogado = "Joao";
} else if (loginUsuario === user2Nome && loginSenha === user2Senha) {
  acessoPermitido = true;
  saldoAtual = user2Saldo;
  nomeLogado = "Maria";
} else if (loginUsuario === user3Nome && loginSenha === user3Senha) {
  acessoPermitido = true;
  saldoAtual = user3Saldo;
  nomeLogado = "Pedro";
}

if (!acessoPermitido) {
  console.log("Acesso negado! Usuário ou senha incorretos.");
} else {
  console.log("Acesso permitido!");
  console.log("Saldo do Usuario " + nomeLogado + ": R$ " + saldoAtual);

  let sacar = parseInt(entrada("Digite quanto você gostaria de sacar: "));

  if (sacar > 0 && sacar <= saldoAtual) {
    // Atualiza o saldo
    saldoAtual = saldoAtual - sacar;

    // === LÓGICA DE CÉDULAS EM CASCATA ===

    // 1. Notas de 50
    let notas50 = Math.floor(sacar / 50);
    let resto = sacar % 50; // O que sobrou para as próximas notas

    // 2. Notas de 20 (calculadas em cima do que restou das de 50)
    let notas20 = Math.floor(resto / 20);
    resto = resto % 20; // O que sobrou para as próximas notas

    // 3. Notas de 10 (calculadas em cima do que restou das de 20)
    let notas10 = Math.floor(resto / 10);
    resto = resto % 10; // O que sobrou para as próximas notas

    // 4. Notas/Moedas de 2 (calculadas em cima do que restou das de 10)
    let notas2 = Math.floor(resto / 2);
    resto = resto % 2; // Sobra final (se o valor for ímpar, ex: R$ 1)

    // Exibição dos resultados
    console.log("\n--- Cédulas Entregues ---");
    console.log("Notas de R$ 50: " + notas50);
    console.log("Notas de R$ 20: " + notas20);
    console.log("Notas de R$ 10: " + notas10);
    console.log("Notas de R$ 2: " + notas2);

    if (resto > 0) {
      console.log("Valor não disponível em cédulas deste caixa: R$ " + resto);
    }

    console.log("\nNovo Saldo: R$ " + saldoAtual);
  } else {
    console.log("Saque inválido! Valor indisponível ou menor/igual a zero.");
  }
}

console.log("\n------------------------------------");
entrada("Pressione enter para finalizar o programa!");
