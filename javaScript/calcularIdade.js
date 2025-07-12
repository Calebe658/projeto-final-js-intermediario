export function calcularIdade(pessoas) {
    const anoAtual = new Date().getFullYear();

    pessoas.forEach(pessoa => {
        const anoNascimento = new Date(pessoa.dataNascimento).getFullYear();
        pessoa.idade = anoAtual - anoNascimento;
    });
}