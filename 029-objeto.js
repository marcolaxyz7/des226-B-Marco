let objeto = {};

let pessoa = {
  nome: "Marco",
  profissao: "Programador",
  idade: 22,
  trabalha: false,
};

let funcionario = {
  nome: "Alerrandra",
  cargo: "Cordenadora",
  salario: 5021.32,
  endereco: {
    rua: "Brasil",
    numero: 10,
    bairro: "Centro",
    cidade: "Tupã",
  },
};

console.log(`Tipo variavel objeto vazio: ${typeof objeto}`);
console.log(`Tipo variavel pessoa: ${typeof pessoa}`);
console.log(pessoa);
console.log(`Nome da pessoa cadastrada: ${pessoa.nome}`);
consoel.log(`Cidade do funcionário: ${funcionario.endereco.cidade}`);
