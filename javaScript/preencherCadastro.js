(function () {
    carregarDetalhesFuncionario()
})()

let funcionario = {};

function carregarDetalhesFuncionario() {
    let idTeste = window.location.search.split("?");
    let id = idTeste[1];

    document.getElementById("_id").innerHTML += id;

    fetch(`https://node-vercel-app-rho.vercel.app/api/funcionarios/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(resp => resp.json())
        .then(dados => {
            funcionario = dados;
            console.log(funcionario);

            preencherDados(funcionario);
        })
        .catch(err => console.error("Erro na requisição:", err));
}

// Colocar os dados do Funcionário encontrado pelo id nos inputs

function preencherDados(funcionario) {
    document.getElementById("fotoPreview").src = funcionario.foto;
    document.getElementById("foto").value = funcionario.foto
    document.getElementById("nome").value = funcionario.nome;
    document.getElementById("sobrenome").value = funcionario.sobrenome;
    document.getElementById("dataNascimento").value = funcionario.dtNascimento;
    document.getElementById("escolaridade").value = funcionario.grauEscolaridade.toLocaleLowerCase();
    document.getElementById("endereco").value = funcionario.endereco;
    document.getElementById("salario").value = funcionario.salarioAtual;
    document.getElementById("passagemDiaria").value = funcionario.valorPassagem;
    document.getElementById("dataInicio").value = funcionario.historicoCargosESalarios[0].dataInicio;
    document.getElementById("cargo").value = funcionario.historicoCargosESalarios[0].cargo;

    // Filtro para sexo
    if (funcionario.sexo.toLocaleLowerCase() == "masculino") {
        document.getElementById("Masculino").checked = true;

    } else {
        document.getElementById("Feminino").checked = true;
    }

    // Filtro para o vale transporte
    if (funcionario.optouVT == true) {
        document.getElementById("valeTransporte-sim").checked = true;

    } else {
        document.getElementById("valeTransporte-nao").checked = true;
    }
}