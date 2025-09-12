export function desconto(pessoasFiltradas) {
    pessoasFiltradas?.forEach((pessoa) => {
        if (pessoa.funcionario.optouVT) {
            const salario = pessoa.funcionario.salario;

            // Desconto máximo do funcionário (6%)
            const descontoMaximo = salario * 0.06;

            // Gasto Mensal
            const passagem = pessoa.funcionario.valorPassagem * 22;

            // Const precisa ser inicializada cm aq eu so declarei para armazenar os valores depois e converter tem q ser let
            let descontoFuncionario;
            let debitoEmpresa;

            if (descontoMaximo < passagem) {
                // Quando a empresa tiver q pagar algo também
                descontoFuncionario = descontoMaximo;
                debitoEmpresa = passagem - descontoMaximo;
            } else {
                // Quando a empresa não tiver q pagar nada
                descontoFuncionario = passagem; // Recebe a passagem pq se ele gastar menos q os 6% vai ser debitado o valor correto em vez de 6%
                debitoEmpresa = 0;
            }

            pessoa.funcionario.desconto = descontoFuncionario.toFixed(2);
            pessoa.funcionario.debitoEmpresa = debitoEmpresa.toFixed(2);
        } else {
            pessoa.funcionario.desconto = `Não optou pelo VT`;
            pessoa.funcionario.debitoEmpresa = 0;
        }
    });
}