function enviarFormulario (event) {
    event.preventDefault();
    const nome = document.getElementById('nomeContato').value;
    const email = document.getElementById('emailContato').value;
    const telefone = document.getElementById('telefoneContato').value;

    const mensagem = `
    Dados enviados com sucesso!<br>
    Nome: ${nome}<br>
    Email: ${email}<br>
    Telefone: ${telefone}<br>
`;

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

function mostrarImagemCachorro() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resposta => resposta.json())
    .then(dados => {
        document.getElementById('imagem-cachorro').src = dados.message;
    })
    .catch(erro => console.error('erro ao buscar imagem do cachorro:',erro));
}

mostrarImagemCachorro()