function enviarFormulario (event) {
    event.preventDeFault();
    const nome = document.getElementById('nomeContato').Value;
    const email = document.getElementById('emailContato').Value;
    const telefone = document.getElementById('telefoneContato').Value;

    const mensagem = `
    Dados enviados com sucesso!<br>
    Nome: $(nome)<br>
    Email: $(email)<br>
    Telefone: $(telefone)<br>
`

document.getElementById('mensagem-confirmacao').innerHTML = mensagem;
}

function mostrarFatoGato() {
    fetch("https://catfact.ninja/fact")
    .then(resposta => resposta.json())
    .then(Dados => {
        document.getElementById('fato-gato').innerHTML = Dados.fact;
    })
    .catch(erro => console.error('erro ao buscar fato do gato:', erro));
}