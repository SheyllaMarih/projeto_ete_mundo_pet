function enviarFormulario (event) {
    event.preventDefault();
    const nome = document.getElementById(`nomeContato´).value;
    const email = document.getElementById(`emailContato`).value;
    const telefone = document.getElementById(`telefoneContato`).value;

    const mensagem =
    Dados Enviados Com Sucesso!<br>
    nome: ${nome}<br>
    email: ${email}<br>
    telefone: ${telefone}
    ;

    document.getElementById(`mensagem-confirmacao`).innerHTML = mensagem;
}