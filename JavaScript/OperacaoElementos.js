var app = document.querySelector('div#app')

//Criar um novo elemento
var link = document.createElement('a')
var textLink = document.createTextNode('Visitar Google')

    link.setAttribute('href', 'http://google.com')

//Coloca como filho desse elemento link o elemento textLink
    link.appendChild(textLink)

//Deixa o link visível para o usuário
    app.appendChild(link)


//Remove um elmeento
var elementRemoved = document.querySelector('div#app h3')

    //app.removeChild(elementRemoved)