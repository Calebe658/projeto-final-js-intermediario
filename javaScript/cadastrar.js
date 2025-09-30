function cadastrarFuncionarios() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let dtNascimento = document.getElementById('dtNascimento').value;
    let grauEscolaridade = document.getElementById('grauEscolaridade').value;
    let endereco = document.getElementById('endereco').value;
    let salarioAtual = document.getElementById('salarioAtual').value;
    let valorPassagem = document.getElementById('valorPassagem').value;
    let foto = document.getElementById("foto").value;

    // Verificações

    let vtSim = document.getElementById('optouVT-sim').checked;
    let vtNao = document.getElementById('optouVT-nao').checked;
    let optouVT;

    if (vtSim) {
        optouVT = true;

    } else {
        if (vtNao)
            optouVT = false;
    }

    let sexoMasculino = document.getElementById("masculino");
    let sexoFeminino = document.getElementById("feminino");
    let sexo;

    if (sexoMasculino.checked) {
        sexo = sexoMasculino.value

    } else {
        if (sexoFeminino.checked) {
            sexo = sexoFeminino.value
        }
    }

    fetch('https://node-vercel-app-rho.vercel.app/api/funcionarios', {
        method: "POST",
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
                throw new Error("Erro ao cadastrar funcionário");
            }
            return resp.json();
        })

        .then(dados => {
            console.log("Funcionário cadastrado:", dados);
            alert("Funcionário cadastrado com sucesso!");
            window.location.href = "../index.html";
        })

        .catch(err => {
            console.error("Erro na requisição:", err);
        });
}