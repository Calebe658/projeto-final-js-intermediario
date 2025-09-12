(function () {
    carregarListaFuncionarios()
})();

import { calcularIdade } from "./calcularIdade.js";
import { descontoFGTS } from "./calcularDescontoFGTS.js";
import { desconto } from "./calcularDesconto.js";

let listaFuncionarios = [];

function carregarListaFuncionarios() {
    fetch('https://node-vercel-app-rho.vercel.app/api/funcionarios', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(resp => resp.json())
        .then(dados => {
            listaFuncionarios = dados;
            console.log(listaFuncionarios);
        })
        .catch(err => console.error("Erro na requisição:", err));
}

const input = document.getElementById("pessoa-input");
const resultado = document.getElementById("resultadoInformacoes");

input.addEventListener("input", () => {
    const nomeDigitado = input.value.trim().toLowerCase();
    resultado.innerHTML = "";

    if (nomeDigitado === "") return;

    const pessoasFiltradas = listaFuncionarios.filter((pessoa) =>
        pessoa.funcionario.nome.toLowerCase().includes(nomeDigitado)
    );

    calcularIdade(pessoasFiltradas);
    descontoFGTS(pessoasFiltradas);
    desconto(pessoasFiltradas);

    if (pessoasFiltradas.length > 0) {
        pessoasFiltradas.forEach((pessoa) => {
            const card = document.createElement("div");
            card.className = "mb-3";

            let nome = pessoa.funcionario.nome;
            let sobrenome = pessoa.funcionario.sobrenome;
            let sexo = pessoa.funcionario.sexo;
            let dtNascimento = pessoa.funcionario.dtNascimento;
            let idade = pessoa.funcionario.idade;
            let grauEscolaridade = pessoa.funcionario.grauEscolaridade;
            let endereco = pessoa.funcionario.endereco;
            let cargo = pessoa.funcionario.historicoCargosESalarios[0].cargo;
            let salarioAtual = pessoa.funcionario.salarioAtual;
            let descontoFgts = pessoa.funcionario.descontofgts;
            let valorPassagem = pessoa.funcionario.valorPassagem;
            let descontoFuncionario = pessoa.funcionario.desconto;
            let descontoEmpresa = pessoa.funcionario.debitoEmpresa;

            let optouVT = pessoa.funcionario.optouVT ? "Sim" : "Não"; // Verificação rápida

            card.innerHTML = `
                <div class="card" id="${pessoa._id}">
                    <h2>Informações da Pessoa:</h2>
                    <p><b>Nome:</b> ${nome} ${sobrenome}</p>
                    <p><b>Sexo:</b> ${sexo}</p>
                    <p><b>Data de Nascimento:</b> ${dtNascimento}</p>
                    <p><b>Idade:</b> ${idade} anos de idade</p>
                    <p><b>Grau de Escolaridade:</b> ${grauEscolaridade}</p>
                    <p><b>Endereço:</b> ${endereco}</p>
                    <p><b>Cargo:</b> ${cargo}</p>
                    <p><b>Salário:</b> ${salarioAtual}</p>
                    <p><b>Valor a pagar pela empresa (FGTS):</b> ${descontoFgts}</p>
                    <p><b>Valor da passagem:</b> ${valorPassagem}</p>
                    <p><b>Optou pelo vale transporte:</b> ${optouVT}</p>
                    <p><b>Valor a descontar do funcionário (Vale Transporte):</b> ${descontoFuncionario}</p>
                    <p><b>Valor a pagar pela empresa (Vale Transporte):</b> ${descontoEmpresa}</p>
                    <p><b>Foto:</b></p>
                    <img src="${pessoa.funcionario.foto}" alt="Foto Da Pessoa" style="max-width: 150px; margin-bottom: 20px;">
                </div>`;

            resultado.appendChild(card);
        });

    } else {
        resultado.innerHTML = `<p class="text-center" style="color: red;">Pessoa não encontrada</p>`;
    }
});

resultado.addEventListener("click", (event) => {
    const card = event.target.closest(".card");
    window.location.href = `./html/atualizarCadastro.html?${card.id}`;
});