function deletarFuncionario() {
    let idTeste = window.location.search.split("?");
    let id = idTeste[1];

    fetch(`https://node-vercel-app-rho.vercel.app/api/funcionarios/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    })
        .then(resp => {
            if (!resp.ok) {
                throw new Error("Erro ao deletar funcionário");
            }
            return resp.json();
        })

        .then(dados => {
            console.log(dados);
            alert(`Funcionário de nº: ${id} deletado com sucesso`);
            window.location.href = "../index.html";
        })

        .catch(err => {
            console.error(err);
        });
}