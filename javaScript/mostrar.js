import { pessoas } from './pessoas.js';
import { calcularIdade } from './calcularIdade.js';
import { desconto } from './calcularDesconto.js';
import { descontoFGTS } from './calcularDescontoFGTS.js';

calcularIdade(pessoas);
desconto(pessoas);
descontoFGTS(pessoas);

const input = document.getElementById('pessoa-input');
const resultado = document.getElementById('resultadoInformacoes');
const botao = document.getElementById('buscar-btn');

input.addEventListener('input', () => {
    const nomeDigitado = input.value.trim().toLowerCase();
    resultado.innerHTML = "";

    if (nomeDigitado === "") return;

    const pessoasFiltradas = pessoas.filter(pessoa =>
        pessoa.nome.toLowerCase().includes(nomeDigitado)
    );

    if (pessoasFiltradas.length > 0) {
        pessoasFiltradas.forEach((pessoa, index) => {
            const card = document.createElement('div');
            card.className = 'mb-3';

            card.innerHTML = `
                <div class="card" id="${pessoa.id}">
                    <h2>Informações da Pessoa:</h2>
                    <p><b>Nome:</b> ${pessoa.nome} ${pessoa.sobrenome}</p>
                    <p><b>Sexo:</b> ${pessoa.sexo}</p>
                    <p><b>Data de Nascimento:</b> ${pessoa.dataNascimento}</p>
                    <p><b>Idade:</b> ${pessoa.idade} anos de idade</p>
                    <p><b>Grau de Escolaridade:</b> ${pessoa.grauEscolaridade}</p>
                    <p><b>Endereço:</b> ${pessoa.endereco}</p>
                    <p><b>Salário:</b> ${pessoa.salario}</p>
                    <p><b>Valor a descontar do funcionário (Vale Transporte):</b> ${pessoa.desconto}</p>
                    <p><b>Valor a pagar pela empresa (Vale Transporte):</b> ${pessoa.debitoEmpresa}</p>
                    <p><b>Valor a pagar pela empresa (FGTS):</b> ${pessoa.descontofgts}</p>
                    <p><b>Foto:</b></p>
                    <img src="${pessoa.foto}" alt="Foto Da Pessoa" style="max-width: 150px; margin-bottom: 20px;">
                </div>`;

            resultado.appendChild(card);
        });

    } else {
        resultado.innerHTML = `<p class="text-center" style="color: red;">Pessoa não encontrada</p>`;
    }
});

resultado.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    window.location.href = `./html/atualizarCadastro.html?${card.id}`;
});

// ${new Date(pessoa.dataNascimento).toLocaleDateString("pt-br")}