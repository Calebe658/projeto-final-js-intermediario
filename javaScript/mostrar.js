import { pessoas } from './pessoas.js';
import { calcularIdade } from './calcularIdade.js';
import { desconto } from './calcularDesconto.js';

calcularIdade(pessoas);
desconto(pessoas);

const input = document.getElementById('pessoa-input');
const resultado = document.getElementById('resultadoInformacoes');
const erro = document.getElementById('mensagem-erro');
const botao = document.getElementById('buscar-btn');

botao.addEventListener('click', () => {
    const nomeDigitado = input.value.trim().toLowerCase();

    const pessoaFiltrada = pessoas.filter(pessoa => {
        return pessoa.nome.toLowerCase() === nomeDigitado;
    });

    const pessoaEncontrada = pessoaFiltrada[0];

    if (pessoaEncontrada) {
        resultado.innerHTML = `<h2> Informações da Pessoa: </h2>
        <p> <b>Nome:</b> ${pessoaEncontrada.nome} </p>
        <p> <b>Sexo:</b> ${pessoaEncontrada.sexo} </p>
        <p> <b>Data de Nascimento:</b> ${new Date(pessoaEncontrada.dataNascimento).toLocaleDateString("pt-br")} </p>
        <p> <b>Idade:</b> ${pessoaEncontrada.idade} anos de idade </p>
        <p> <b>Grau de Escolaridade:</b> ${pessoaEncontrada.grauEscolaridade} </p>
        <p> <b>Endereço:</b> ${pessoaEncontrada.endereco} </p>
        <p> <b>Salário:</b> ${pessoaEncontrada.salario} R$</p>
        <p> <b>Vale Transporte:</b> ${pessoaEncontrada.desconto} R$</p>
        <p> <b>Foto:</b> </p>
        <img src="${pessoaEncontrada.foto}" alt="Foto Da Pessoa">`;

        erro.textContent = '';

    } else {
        erro.textContent = "Pessoa não encontrada.";
        resultado.innerHTML = '';
    }
});