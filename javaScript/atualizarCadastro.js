import { pessoas } from './pessoas.js';

// window.location.search pega tudo que foi passado a passado a partir do ? (inclusive o ?)
const id = window.location.search.split("?"); // Usar id[1] pq o split separa o id e um array ['', 'id']
const idUsuario = document.getElementById("id");

idUsuario.innerText += ` ${id[1]}`;

// Encontra o id da pessoa
const pessoa = pessoas.find(pessoa => pessoa.id == id[1]);

if (pessoa) {
    document.getElementById('nome').value = pessoa.nome;
    document.getElementById('sobrenome').value = pessoa.sobrenome;
    document.getElementById('dataNascimento').value = pessoa.dataNascimento;
    document.getElementById('escolaridade').value = pessoa.grauEscolaridade.toLocaleLowerCase();
    document.getElementById('endereco').value = pessoa.endereco;
    document.getElementById('salario').value = pessoa.salario;
    document.getElementById('passagemDiaria').value = pessoa.passagemDiaria;
    document.getElementById('dataInicio').value = pessoa.historico[pessoa.historico.length - 1].dataInicio;
    document.getElementById('cargo').value = pessoa.historico[pessoa.historico.length - 1].cargo;

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