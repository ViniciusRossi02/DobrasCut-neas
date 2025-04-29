function calcular() {
    var triceps = Number(document.getElementById('txttri').value.replace(',', '.'))
    var subs = Number(document.getElementById('txtesca').value.replace(',', '.'))
    var peito = Number(document.getElementById('txtpeito').value.replace(',', '.'))
    var axilar = Number(document.getElementById('txtaxilar').value.replace(',', '.'))
    var abs = Number(document.getElementById('txtabdominal').value.replace(',', '.'))
    var supra = Number(document.getElementById('txtsupra').value.replace(',', '.'))
    var coxa = Number(document.getElementById('txtcoxa').value.replace(',', '.'))
    var idade = Number(document.getElementById('txtidade').value)
    var fsex = document.getElementsByName('radsex')
    var resultado = document.getElementById('resultado')
    var name = document.getElementById('txtname').value.trim()
    var genero = ""

    // Verificando se algum campo está vazio ou não numérico
    if (
        isNaN(triceps) || isNaN(subs) || isNaN(peito) || isNaN(idade) || name.length === 0 ||
        isNaN(axilar) || isNaN(abs) || isNaN(supra) || isNaN(coxa)
    ) {
        window.alert("Por favor, preencha todos os campos corretamente!")
        return
    }

    if (fsex[0].checked) {
        var genero = "homem"
        var somah = triceps + subs + peito + axilar + abs + supra + coxa
        var densidadeh = 1.112 - (0.00043499 * somah) + (0.00000055 * (somah ** 2)) - (0.00028826 * idade)
        var percgordh = ((4.95 / densidadeh) - 4.50) * 100

        resultado.innerHTML = `${name} você é um ${genero} com ${idade} anos. <br> Resultado: ${percgordh.toFixed(2)}% de gordura corporal`

        if (percgordh < 2) {
            indice.innerHTML = "IMPOSSÍVEL"
        } else if (percgordh >= 2 && percgordh <= 5) {
            indice.innerHTML = "Percentual Minimo(Muito Baixo)"
        } else if (percgordh >= 6 && percgordh <= 13) {
            indice.innerHTML = "Seu percentual é de atleta"
        } else if (percgordh >= 14 && percgordh <= 17) {
            indice.innerHTML = "Seu percentual é Bom "
        } else if (percgordh >= 18 && percgordh < 25) {
            indice.innerHTML = "Seu percentual é normal "
        } else if (percgordh >= 25 && percgordh <= 30) {
            indice.innerHTML = "Seu percentual é de Sobrepeso"
        } else {
            indice.innerHTML = "Voce esta muito acima do ideal"
        }




    } else if (fsex[1].checked) {
        var genero = "Mulher"
        var somaf = triceps + subs + peito + axilar + abs + supra + coxa
        var densidadef = 1.097 - (0.00046971 * somaf) + (0.00000056 * (somaf ** 2)) - (0.00012828 * idade)
        var percgordf = ((4.95 / densidadef) - 4.50) * 100
        resultado.innerHTML = `${name} você é uma ${genero} com ${idade} anos. <br> O Resultado: ${percgordf.toFixed(2)}% de gordura corporal`

        if (percgordf < 10) {
            indice.innerHTML = "Seu percentual é muito baixo"
        } else if (percgordf >= 10 && percgordf <= 13) {
            indice.innerHTML = "Percentual Minimo(Baixo)"
        } else if (percgordf >= 14 && percgordf <= 20) {
            indice.innerHTML = "Seu percentual é de atleta"
        } else if (percgordf >= 21 && percgordf <= 24) {
            indice.innerHTML = "Seu percentual é Bom "
        } else if (percgordf >= 25 && percgordf <= 31) {
            indice.innerHTML = "Seu percentual é normal "
        } else if (percgordf >= 32 && percgordf <= 37) {
            indice.innerHTML = "Seu percentual é de Sobrepeso"
        } else {
            indice.innerHTML = "Voce esta muito acima do ideal"
        }


    }
}