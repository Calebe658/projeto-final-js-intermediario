function atualizarFuncionario() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let dtNascimento = document.getElementById('dataNascimento').value;
    let grauEscolaridade = document.getElementById('escolaridade').value;
    let endereco = document.getElementById('endereco').value;
    let salarioAtual = document.getElementById('salario').value;
    let valorPassagem = document.getElementById('passagemDiaria').value;
    let foto = document.getElementById("foto").value;

    // Verificações

    let vtSim = document.getElementById('valeTransporte-sim').checked;
    let vtNao = document.getElementById('valeTransporte-nao').checked;
    let optouVT;

    if (vtSim) {
        optouVT = true;

    } else {
        if (vtNao)
            optouVT = false;
    }

    let sexoMasculino = document.getElementById("Masculino");
    let sexoFeminino = document.getElementById("Feminino");
    let sexo;

    if (sexoMasculino.checked) {
        sexo = sexoMasculino.value

    } else {
        if (sexoFeminino.checked) {
            sexo = sexoFeminino.value
        }
    }

    // Pegar o Id

    let idTeste = window.location.search.split("?");
    let id = idTeste[1];

    fetch(`https://node-vercel-app-rho.vercel.app/api/funcionarios/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nome: nome,
            sobrenome: sobrenome,
            sexo: sexo,
            dtNascimento: dtNascimento,
            grauEscolaridade: grauEscolaridade,
            endereco: endereco,
            foto: foto,
            salarioAtual: parseFloat(salarioAtual),
            valorPassagem: parseFloat(valorPassagem),
            optouVT: optouVT,
            historicoCargosESalarios: [
                {
                    cargo: "Desenvolvedora Senior",
                    salario: 5000,
                    dataInicio: "2021-01-01",
                    dataFim: null
                }
            ]
        })
    })
        .then(resp => {
            if (!resp.ok) {
                throw new Error("Erro ao atualizar o funcionário");
            }
            return resp.json();
        })

        .then(dados => {
            console.log(dados);
            alert(`Funcionário atualizado com sucesso`);
            window.location.href = "../index.html";
        })

        .catch(err => {
            console.error(err);
        });
}