function calcular() {
    const n1 = parseFloat (document.getElementById("numero1").value);
    const n2 = parseFloat (document.getElementById("numero2").value);
    const operacao = document.getElementById("operacao").value;

    if (isNaN(n1) || isNaN(n2)) {
        alert("por favor, digite dois números válidos.");
        return;
    }

    let resultado;

    switch (operacao) {
        case "soma":
            resultado = n1 + n2;
            break;
        case "subtracao":
            resultado = n1 - n2;
            break;
            case "multiplicacao":
                resultado = n1 * n2;
            break;
        case "divisao":
        if (n2 === 0){
            alert ("não é possivel dividir por zero");
            return;
        }
                    resultado = n1 / n2;
                    break;
                    default:
                        resultado = "Operação inválida";
    }

    document.getElementById("resultado").innerText = resultado
}
