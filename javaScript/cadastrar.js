import { pessoas } from "./pessoas.js"

export function cadastrar() {
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const dataNascimento = document.getElementById("dataNascimento").value;
    const escolaridade = document.getElementById("escolaridade").value;
    const endereco = document.getElementById("endereco").value.trim();
    const salario = parseFloat(document.getElementById("salario").value);
    const passagemDiaria = parseFloat(document.getElementById("passagemDiaria").value);
    const foto = document.getElementById("foto").value;

    const vtSim = document.getElementById("valeTransporte-sim").checked;
    const vtNao = document.getElementById("valeTransporte-nao").checked;
    const masculino = document.getElementById("Masculino").checked;
    const feminino = document.getElementById("Feminino").checked;

    // Armazenar o valor dos radios em apenas 1 variável (valor booleano)
    const valeTransporte = vtSim ? "Sim" : (vtNao ? "Não" : "Não selecionado");
    const sexo = masculino ? "Masculino" : (feminino ? "Feminino" : "Não selecionado");

    const resultado = document.getElementById("resultado");

    if (sexo == "Masculino") {
        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            sexo: sexo,
            dataNascimento: dataNascimento,
            grauEscolaridade: escolaridade,
            endereco: endereco,
            opcaoVT: valeTransporte,
            salario: salario,
            passagemDiaria: passagemDiaria,
            foto: "../imagens/masculino.jpg"
        })

    } else {
        if (sexo == "Feminino") {
            pessoas.push({
                nome: nome,
                sobrenome: sobrenome,
                sexo: sexo,
                dataNascimento: dataNascimento,
                grauEscolaridade: escolaridade,
                endereco: endereco,
                opcaoVT: valeTransporte,
                salario: salario,
                passagemDiaria: passagemDiaria,
                foto: "../imagens/feminino.jpg"
            })
        }
    }

    console.log(pessoas);
}

window.cadastrar = cadastrar;