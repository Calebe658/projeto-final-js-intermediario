function cadastrarFuncionarios() {
    let nome = validador(document.getElementById('nome').value, "Nome");
    let sobrenome = validador(document.getElementById('sobrenome').value, "Sobrenome");
    let dtNascimento = validador(document.getElementById('dtNascimento').value, "Data de nascimento");
    let grauEscolaridade = validador(document.getElementById('grauEscolaridade').value, "Grau de escolaridade");
    let endereco = validador(document.getElementById('endereco').value, "Endereço");
    let cargo = validador(document.getElementById("cargo").value, "Cargo");
    let salarioAtual = validador(document.getElementById('salarioAtual').value, "Salário atual");
    let valorPassagem = validador(document.getElementById('valorPassagem').value, "Valor da passagem");
    let foto = validador(document.getElementById("foto").value, "Foto");

    // Verificações

    let vtSim = document.getElementById('optouVT-sim').checked;
    let vtNao = document.getElementById('optouVT-nao').checked;
    let optouVT;

    if (vtSim) {
        optouVT = true;

    } else {
        if (vtNao) {
            optouVT = false;

        } else {
            alert(`Atenção! O campo opção pelo VT é obrigatório.`);
            return;
        }
    }

    let sexoMasculino = document.getElementById("masculino");
    let sexoFeminino = document.getElementById("feminino");
    let sexo;

    if (sexoMasculino.checked) {
        sexo = sexoMasculino.value

    } else {
        if (sexoFeminino.checked) {
            sexo = sexoFeminino.value

        } else {
            alert(`Atenção! O campo sexo é obrigatório.`);
            return;
        }
    }

    // Validador 

    function validador(valor, campo) {
        if (valor == undefined || valor == null || valor == "") {
            alert(`Atenção! O campo ${campo} é obrigatório!`)
            throw new Error(`O campo ${campo} está vazio`);

        } else {
            return valor;
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
                    cargo: cargo,
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