export function descontoFGTS(pessoasFiltradas) {
    pessoasFiltradas?.forEach((pessoa) => {
        const salario = pessoa.funcionario.salarioAtual; // Armazenar em variáveis so pra poder converter dps
        const desconto = salario * 0.08;

        pessoa.funcionario.descontofgts = desconto.toFixed(2);
    });
}