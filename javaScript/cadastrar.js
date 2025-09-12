function carregarPOST() {
    fetch('https://node-vercel-app-rho.vercel.app/api/funcionarios', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            {
                "funcionario": {
                    "nome": "Pedro Paulo",
                    "sobrenome": "Santos",
                    "sexo": "Masculino",
                    "dtNascimento": "2005-01-15",
                    "grauEscolaridade": "Ensino Médio Completo",
                    "endereco": "Rua das Palmeiras, 123, Apto 302",
                    "foto": "img/ana clara.png",
                    "salarioAtual": 2000.00,
                    "valorPassagem": 8.60,
                    "optouVT": true,
                    "historicoCargosESalarios": [
                        {
                            "cargo": "Desenvolvedor Jr.",
                            "salario": 3000,
                            "dataInicio": "2024-01-01",
                            "dataFim": "2025-01-01"
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