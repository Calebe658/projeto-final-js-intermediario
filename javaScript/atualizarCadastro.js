import { pessoas } from './pessoas.js';

// window.location.search pega tudo que foi passado a passado a partir do ? (inclusive o ?)
const id = window.location.search.split("?"); // Usar id[1] pq o split separa o id em um array ['', 'id']
const idUsuario = document.getElementById("id");

idUsuario.innerText += `Id do usuário: ${id[1]}`;

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

// Ao clicar o botão
document.getElementById("botaoAtualizarCadastro").addEventListener("click", function (event) {
    event.preventDefault();

    const arrayPessoas = JSON.parse(localStorage.getItem("Array de Pessoas"));

    // Encontrar a pessoa pelo id
    const pessoaAtualizada = arrayPessoas.find(p => p.id == pessoa.id);

    if (pessoaAtualizada) {
        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const escolaridade = document.getElementById('escolaridade').value;
        const endereco = document.getElementById('endereco').value;
        const salario = document.getElementById('salario').value;
        const passagemDiaria = document.getElementById('passagemDiaria').value;

        // LEMBRAR DE USAR O HISTORICO PARA PEGAR OQ TÁ NA ARRAY DE OBJ
        const historico = pessoaAtualizada.historico[pessoaAtualizada.historico.length - 1];
        const dataInicio = document.getElementById('dataInicio').value;
        const cargo = document.getElementById('cargo').value;

        if (nome != pessoaAtualizada.nome) {
            pessoaAtualizada.nome = nome;
        }

        if (sobrenome != pessoaAtualizada.sobrenome) {
            pessoaAtualizada.sobrenome = sobrenome;
        }

        if (dataNascimento != pessoaAtualizada.dataNascimento) {
            pessoaAtualizada.dataNascimento = dataNascimento;
        }

        if (escolaridade != pessoaAtualizada.escolaridade) {
            pessoaAtualizada.grauEscolaridade = escolaridade;
        }

        if (endereco != pessoaAtualizada.endereco) {
            pessoaAtualizada.endereco = endereco;
        }

        if (salario != pessoaAtualizada.salario) {
            pessoaAtualizada.salario = salario;
        }

        if (passagemDiaria != pessoaAtualizada.passagemDiaria) {
            pessoaAtualizada.passagemDiaria = passagemDiaria;
        }

        // Se verdadeiro == masculino / Se falso == feminino
        const sexo = document.getElementById('Masculino').checked ? 'Masculino' : 'Feminino';
        if (sexo != pessoaAtualizada.sexo) {
            pessoaAtualizada.sexo = sexo;
        }

        const valeTransporte = document.getElementById('valeTransporte-sim').checked;
        if (valeTransporte != pessoaAtualizada.valeTransporte) {
            pessoaAtualizada.opcaoVT = valeTransporte;
        }

        if (dataInicio != historico.dataInicio) {
            historico.dataInicio = dataInicio;
        }

        if (cargo != historico.cargo) {
            historico.cargo = cargo;
        }

        // Sobreesreve no localStorage
        localStorage.setItem("Array de Pessoas", JSON.stringify(arrayPessoas));
        console.log(arrayPessoas);
    }
});