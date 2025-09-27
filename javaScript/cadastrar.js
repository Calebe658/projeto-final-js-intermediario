function cadastrarFuncionarios() {
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let dtNascimento = document.getElementById('dtNascimento').value
    let sexo = document.getElementById("masculino").checked ? "Masculino" : "Feminino";
    let grauEscolaridade = document.getElementById('grauEscolaridade').value
    let endereco = document.getElementById('endereco').value
    let optouVT = document.getElementById('optouVT-sim').checked ? "Sim" : "Não";
    let salarioAtual = document.getElementById('salarioAtual').value
    let valorPassagem = document.getElementById('valorPassagem').value

    fetch('https://node-vercel-app-rho.vercel.app/api/funcionarios', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            {
                "funcionario": {
                    "nome": `${nome}`,
                    "sobrenome": `${sobrenome}`,
                    "sexo": `${sexo}`,
                    "dtNascimento": `${dtNascimento}`,
                    "grauEscolaridade": `${grauEscolaridade}`,
                    "endereco": `${endereco}`,
                    "foto": "foto",
                    "salarioAtual": `${salarioAtual}`,
                    "valorPassagem": `${valorPassagem}`,
                    "optouVT": `${optouVT}`,
                    "historicoCargosESalarios": [
                        {
                            "cargo": "Desenvolvedora Senior",
                            "salario": 5000,
                            "dataInicio": "2021-01-01",
                            "dataFim": "null"
                        }
                    ]
                }
            }
        )
    })
        .then(resp => resp.json())
        .then(dados => console.log(dados))
        .catch(err => console.error("Erro na requisição:", err));
}