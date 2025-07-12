export function desconto(pessoas) {

    pessoas.forEach(pessoa => {
        if (pessoa.opcaoVT) {
            const salario = pessoa.salario;
            pessoa.desconto = (salario * 0.06).toFixed(2);

        } else {
            pessoa.desconto = `Não optou pelo VT`;
        }
    });
}