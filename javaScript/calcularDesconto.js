export function desconto(pessoas) {
    pessoas.forEach(pessoa => {
        console.log("Pessoa analisada:", pessoa.nome, pessoa.salario, pessoa.opcaoVT);

        if (pessoa.opcaoVT) {
            const salario = pessoa.salario;
            pessoa.desconto = (salario * 0.06).toFixed(2);
        } else {
            pessoa.desconto = `Não optou pelo VT`;
        }
    });
}
