export function calcularIdade(pessoasFiltradas) {
    const anoAtual = new Date().getFullYear();

    pessoasFiltradas?.forEach((pessoa) => {
        const anoNascimento = new Date(pessoa.funcionario.dtNascimento).getFullYear();
        pessoa.funcionario.idade = anoAtual - anoNascimento;
    });
}