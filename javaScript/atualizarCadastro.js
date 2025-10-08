function atualizarFuncionario() {
    let nome = validador(document.getElementById('nome').value, "nome");
    let sobrenome = validador(document.getElementById('sobrenome').value, "sobrenome");
    let dtNascimento = validador(document.getElementById('dataNascimento').value, "data de nascimento");
    let grauEscolaridade = validador(document.getElementById('escolaridade').value, "grau de escolaridade");
    let endereco = validador(document.getElementById('endereco').value, "endereço");
    let cargo = validador(document.getElementById("cargo").value, "cargo");
    let salarioAtual = validador(document.getElementById('salario').value, "salário");
    let valorPassagem = validador(document.getElementById('passagemDiaria').value, "valor da passagem");
    let foto = validador(document.getElementById("foto").value, "foto");
    let dtInicio = validador(document.getElementById("dtInicio").value, "data de início");

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

    let dtDemissao = document.getElementById("dtDemissao").value;

    if (dtDemissao == "") {
        dtDemissao = null;
    }

    // Validador 

    function validador(valor, campo) {
        if (valor == undefined || valor == null || valor == "") {
            alert(`Atenção! O campo ${campo} é obrigatório!`);
            throw new Error(`O campo ${campo} está vazio`);
        }

        let apenasLetras = /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ ]+$/;
        let apenasLetrasEnumeros = /^[a-zA-Z0-9 ]+$/;

        if (campo == "nome" || campo == "sobrenome") {
            if (apenasLetras.test(valor)) {
                return valor;

            } else {
                alert(`O campo ${campo} deve conter apenas letras e espaços.`);
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

    // Pegar o Id

    let idTeste = window.location.search.split("?");
    let id = idTeste[1];

    // Enviar

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
            salario: parseFloat(salarioAtual),
            valorPassagem: parseFloat(valorPassagem),
            optouVT: optouVT,
            cargo: cargo,
            dataInicio: dtInicio,
            dataDemissao: dtDemissao
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