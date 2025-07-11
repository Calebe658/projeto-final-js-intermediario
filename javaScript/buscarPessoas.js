import { pessoas } from "./pessoas.js";

// PEGAR A IDADE DA PESSOA
const anoAtual = new Date().getFullYear();

pessoas.forEach(pessoa => {
    const anoNascimento = new Date(pessoa.dataNascimento).getFullYear();
    pessoa.idade = anoAtual - anoNascimento;
});

const input = document.getElementById('pessoa-input');
const resultado = document.getElementById('resultadoInformacoes');
const erro = document.getElementById('mensagem-erro');
const botao = document.getElementById('buscar-btn');

input.addEventListener('input', () => {
    const nomeDigitado = input.value.trim().toLowerCase();
    const sugestoes = document.getElementById('sugestoes');

    sugestoes.innerHTML = '';

    if (nomeDigitado == '') {
        resultadoInformacoes.innerHTML = '';
        return;
    }

    const nomesFiltrados = pessoas.filter(pessoa => {
        //sem o include aqui a busca não rola (ele verifica se essa string contem a outra string)
        return pessoa.nome.toLowerCase().includes(nomeDigitado);
    });

    nomesFiltrados.forEach(pessoa => {
        const option = document.createElement('option');
        option.value = pessoa.nome;
        sugestoes.appendChild(option);
    });
});

// Ao Clicar o Botão
botao.addEventListener('click', () => {
    const nomeDigitado = input.value.trim().toLowerCase();

    const pessoaFiltrada = pessoas.filter(pessoa => {
        return pessoa.nome.toLowerCase() == nomeDigitado
    });

    const pessoaEncontrada = pessoaFiltrada[0];

    if (pessoaEncontrada) {
        resultado.innerHTML = `<h2> Informações da Pessoa: </h2>
            <p> <b>Nome:</b> ${pessoaEncontrada.nome} </p>
            <p> <b>Sexo:</b> ${pessoaEncontrada.sexo} </p>
            <p> <b>Data de Nascimento:</b> ${new Date(pessoaEncontrada.dataNascimento).toLocaleDateString("pt-br")} </p>
            <p> <b>Grau de Escolaridade:</b> ${pessoaEncontrada.grauEscolaridade} </p>
            <p> <b>Endereço:</b> ${pessoaEncontrada.endereco} </p>
            <p> <b>Foto:</b> </p>
            <img src="${pessoaEncontrada.foto}" alt="Foto Da Pessoa">`;

            erro.textContent = "";

    } else {
        erro.textContent = "Pessoa não encontrada.";
        resultado.innerHTML = "";
    }
});
