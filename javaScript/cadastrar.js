function cadastrarFuncionarios() {
    let nome = validador(document.getElementById('nome').value, "nome");
    let sobrenome = validador(document.getElementById('sobrenome').value, "sobrenome");
    let dtNascimento = validador(document.getElementById('dtNascimento').value, "data de nascimento");
    let grauEscolaridade = validador(document.getElementById('grauEscolaridade').value, "grau de escolaridade");
    let endereco = validador(document.getElementById('endereco').value, "endereço");
    let cargo = validador(document.getElementById("cargo").value, "cargo");
    let salarioAtual = validador(document.getElementById('salarioAtual').value, "salário");
    let valorPassagem = validador(document.getElementById('valorPassagem').value, "valor da passagem");
    let foto = validador(document.getElementById("foto").value, "foto");

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
        }

        let apenasLetras = /^[a-zA-Z]+$/;
        let apenasLetrasEnumeros = /^[a-zA-Z0-9]+$/;

        if (campo == "nome" || campo == "sobrenome") {
            if (apenasLetras.test(valor)) {
                return valor;

            } else {
                alert(`O campo ${campo} deve conter apenas letras.`);
                throw new Error(`O campo ${campo} inválido`);
            }
        }

        if (campo == "cargo") {
            if (apenasLetrasEnumeros.test(valor)) {
                return valor;

            } else {
                alert(`O campo ${campo} deve conter apenas letras e números`);
                throw new Error(`O campo ${campo} está inválido`);
            }
        }

        return valor;
    }

    // Enviar

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