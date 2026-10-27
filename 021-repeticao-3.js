const entrada = require("prompt-sync")();

senha = 1475369;

do {
  senhaDigitada = entrada("Digite sua senha: ");
} while (senha !== senhaDigitada);

entrada("Sistema acessado com sucesso! Pressione Enter para prosseguir.");
