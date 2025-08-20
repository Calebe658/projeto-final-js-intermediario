export function calcularIdade(arrayPessoas) {
    const anoAtual = new Date().getFullYear();

    arrayPessoas?.forEach((pessoa) => {
        const anoNascimento = new Date(pessoa.dataNascimento).getFullYear();
        pessoa.idade = anoAtual - anoNascimento;
    });
}