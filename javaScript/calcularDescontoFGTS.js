export function descontoFGTS(pessoasFiltradas) {
    pessoasFiltradas?.forEach((pessoa) => {
        const salario = pessoa.salario; // Armazenar em variáveis so pra poder converter dps
        const desconto = salario * 0.08;

        pessoa.descontofgts = desconto.toFixed(2);
    });
}