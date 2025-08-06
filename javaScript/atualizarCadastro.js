import { pessoas } from './pessoas.js';

// window.location.search pega tudo que foi passado a passado a partir do ? (inclusive o ?)
const id = window.location.search.substring(1); // o .substring(1) pega a partir do 2º caractere (índice 1), ou seja, tira o ? do início

// Encontrar o id da pessoa e comparar com o id da página
const pessoa = pessoas.find(pessoa => pessoa.id == id);

// Se o id da pessoa estiver certo
if (pessoa) {
    document.getElementById('nome').value = pessoa.nome;
    document.getElementById('sobrenome').value = pessoa.sobrenome;
    document.getElementById('dataNascimento').value = pessoa.dataNascimento;
    document.getElementById('escolaridade').value = pessoa.grauEscolaridade.toLocaleLowerCase();
    document.getElementById('endereco').value = pessoa.endereco;
    document.getElementById('salario').value = pessoa.salario;
    document.getElementById('passagemDiaria').value = pessoa.passagemDiaria;
    // document.getElementById('dataInicio').value = pessoa.dataInicio;
    // document.getElementById('cargo').value = pessoa.cargo;

    // Filtro para sexo
    if (pessoa.sexo.toLocaleLowerCase() == "masculino") {
        document.getElementById("Masculino").checked = true;

    } else {
        document.getElementById("Feminino").checked = true;
    }

    // Filtro para o vale transporte
    if (pessoa.opcaoVT == true) {
        document.getElementById("valeTransporte-sim").checked = true;

    } else {
        document.getElementById("valeTransporte-nao").checked = true;
    }
}