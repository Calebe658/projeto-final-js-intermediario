import { pessoas } from './pessoas.js';

const input = document.getElementById('pessoa-input');
const resultadoInformacoes = document.getElementById('resultadoInformacoes');
const sugestoes = document.getElementById('sugestoes');

input.addEventListener('input', () => {
    const nomeDigitado = input.value.trim().toLowerCase();

    sugestoes.innerHTML = "";

    if (nomeDigitado == "") {
        resultadoInformacoes.innerHTML = "";
        return;
    }

    const nomesFiltrados = pessoas.filter(pessoa => {
        return pessoa.nome.toLowerCase().includes(nomeDigitado);
    });

    nomesFiltrados.forEach(pessoa => {
        const option = document.createElement('option');
        option.value = pessoa.nome;
        sugestoes.appendChild(option);
    });
});