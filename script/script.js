
function criptografar() {
    const alfabeto = {
        "A": 1, "B": 2, "C": 3, "Ç": 3, "D": 4, "E": 5, "F": 6, "G": 7,
        "H": 8, "I": 9, "J": 10, "K": 11, "L": 12, "M": 13, "N": 14,
        "O": 15, "P": 16, "Q": 17, "R": 18, "S": 19, "T": 20, "U": 21,
        "V": 22, "W": 23, "X": 24, "Y": 25, "Z": 26
    
    }

    let name1 = document.getElementById("name1").value.toUpperCase()
    let subname = document.getElementById("subname").value.toUpperCase()
    let res = document.getElementById("res")
    res.innerHTML = ""

    function converterTexto(texto) {
        let resultado = ""
        for (let i = 0; i < texto.length; i++) {
            let letra = texto[i]
            if (alfabeto[letra] !== undefined) {
                resultado += alfabeto[letra] + ""
            } else {
                resultado += " ? " // Caractere inválido
            }
        }
        return resultado.trim()
    }

    
    if (name1 === "" && subname === "") {
        res.innerHTML = "Insira um valor válido!"
        res.style.color = "red"
    } else {
        let resultadoName1 = converterTexto(name1)
        let resultadoSubname = converterTexto(subname)

        res.innerHTML = resultadoName1 + "<br>" + resultadoSubname + "<br><br>" + "Nome Criptografado !"
        res.style.color = "yellow"
    }

}
//
document.getElementById("but").addEventListener('click', criptografar)
