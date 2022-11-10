function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'manha.png'
        document.body.style.background = '#9FBCBF'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#F9B56C'
    } else {
        // Boa Noite!
        img.src = 'noite.png'
        document.body.style.background = '#022340'
    }
}

