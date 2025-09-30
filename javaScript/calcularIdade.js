export function calcularIdade(pessoasFiltradas) {
    const anoAtual = new Date().getFullYear();

    pessoasFiltradas?.forEach((pessoa) => {
        const anoNascimento = new Date(pessoa.dtNascimento).getFullYear();
        pessoa.idade = anoAtual - anoNascimento;
    });
}