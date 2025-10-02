function atualizarFuncionario() {
    let nome = validador(document.getElementById('nome').value, "Nome");
    let sobrenome = validador(document.getElementById('sobrenome').value, "Sobrenome");
    let dtNascimento = validador(document.getElementById('dataNascimento').value, "Data de nascimento");
    let grauEscolaridade = validador(document.getElementById('escolaridade').value, "Grau de escolaridade");
    let endereco = validador(document.getElementById('endereco').value, "Endereço");
    let salarioAtual = validador(document.getElementById('salario').value, "Salário atual");
    let valorPassagem = validador(document.getElementById('passagemDiaria').value, "Valor da passagem");
    let foto = validador(document.getElementById("foto").value, "Foto");
    let cargo = validador(document.getElementById("cargo").value, "Cargo");

    // Verificações

    let vtSim = document.getElementById('valeTransporte-sim').checked;
    let vtNao = document.getElementById('valeTransporte-nao').checked;
    let optouVT;

    if (vtSim) {
        optouVT = true;

    } else {
        if (vtNao) {
            optouVT = false;

        } else {
            alert(`Atenção! O campo opção pelo VT é obrigatório`);
            return;
        }
    }

    let sexoMasculino = document.getElementById("Masculino");
    let sexoFeminino = document.getElementById("Feminino");
    let sexo;

    if (sexoMasculino.checked) {
        sexo = sexoMasculino.value

    } else {
        if (sexoFeminino.checked) {
            sexo = sexoFeminino.value

        } else {
            alert(`Atenção! O campo sexo é obrigatório`);
            return;
        }
    }

    // Validador 

    function validador(valor, campo) {
        if (valor == undefined || valor == null || valor == "") {
            alert(`Atenção! Campo ${campo} é obrigatório!`);
            throw new Error(`Campo ${campo} vazio`);

        } else {
            return valor;
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