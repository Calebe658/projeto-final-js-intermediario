(function () {
    carregarListaFuncionarios()
})();

let listaFuncionarios = [];

function carregarListaFuncionarios() {
    fetch('https://node-vercel-app-rho.vercel.app/api/funcionarios', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(resp => resp.json())
        .then(dados => {
            listaFuncionarios = dados;
        })
        .catch(err => console.error("Erro na requisição:", err));
}

const input = document.getElementById("pessoa-input");
const resultadoInformacoes = document.getElementById("resultadoInformacoes");
const sugestoes = document.getElementById("sugestoes");

input.addEventListener("input", () => {
    const nomeDigitado = input.value.trim().toLowerCase();

    sugestoes.innerHTML = "";

    if (nomeDigitado === "") {
        resultadoInformacoes.innerHTML = "";
        return;
    }

    const nomesFiltrados = listaFuncionarios.filter((pessoa) => {
        return pessoa.nome.toLowerCase().includes(nomeDigitado);
    });

    nomesFiltrados.forEach((pessoa) => {
        const option = document.createElement("option");
        option.value = pessoa.nome;
        sugestoes.appendChild(option);

    });
});