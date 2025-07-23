function cadastrar() {
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const dataNascimento = document.getElementById("dataNascimento").value;
    const escolaridade = document.getElementById("escolaridade").value;
    const endereco = document.getElementById("endereco").value.trim();
    const salario = parseFloat(document.getElementById("salario").value);
    const passagemDiaria = parseFloat(document.getElementById("passagemDiaria").value);

    const vtSim = document.getElementById("valeTransporte-sim").checked;
    const vtNao = document.getElementById("valeTransporte-nao").checked;
    const masculino = document.getElementById("Masculino").checked;
    const feminino = document.getElementById("Feminino").checked;

    const valeTransporte = vtSim ? "Sim" : (vtNao ? "Não" : "Não selecionado");
    const sexo = masculino ? "Masculino" : (feminino ? "Feminino" : "Não selecionado");

    const resultado = document.getElementById("resultado");

    resultado.innerHTML += `<h2> Dados Cadastrados <h2>
    <div style="Text-align: left">
    <p><b>Nome:</b> ${nome} ${sobrenome}</p>
    <p><b>Data de nascimento:</b> ${dataNascimento}</p>
    <p><b>Sexo:</b> ${sexo}</p>
    <p><b>Escolaridade:</b> ${escolaridade}</p>
    <p><b>Endereço:</b> ${endereco}</p>
    <p><b>Salário:</b> ${salario}</p>
    <p><b>Valor de passagem diário:</b> ${passagemDiaria}</p>
    <p><b>Opção pelo VT:</b> ${valeTransporte}</p>
    </div>
    
    <hr>
    `
}