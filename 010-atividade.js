const prompt = require("prompt-sync")();

const hoje = new Date();

const nome = prompt("Digite seu nome: ");
const matricula = prompt("Digite sua matrícula: ");

const disciplinas = ["Banco de Dados", "Front End", "Back End"];

const registrarEntrada = (aluno, codMatricula, listaDisciplinas, dataRegistro) => {
    console.log("\n--- REGISTRO DE ENTRADA NO LABORATÓRIO ---");
    console.log(`Aluno(a): ${aluno}`);
    console.log(`Matrícula: ${codMatricula}`);
    console.log(`Disciplinas: ${listaDisciplinas.join(", ")}`);
    console.log(`Data e Hora: ${dataRegistro.toLocaleString()}`);
    console.log("-----------------------------------------\n");
};

registrarEntrada(nome, matricula, disciplinas, hoje);

console.log("Tipo da variável 'hoje':", typeof hoje);
console.log("Tipo da variável 'registrarEntrada':", typeof registrarEntrada);

if (materia == curso) {
    console.log('')
}


