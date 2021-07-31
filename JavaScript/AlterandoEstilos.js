//Alterando estilos
var element = document.querySelector('body')
var elementDiv = document.querySelector('div#app')

//element.style.background = '#000' torna o background preto
elementDiv.style.height = '200px'
elementDiv.style.background = '#6495ED'

//Alterando conteúdo
var app1 = document.querySelector('div#app1')

//Retorna o elemento em formato de texto
    console.log(app1.outerHTML) 

//Retorna tudo que estiver dentro do elemento
    console.log(app1.innerHTML)

//Retorna todo o texto, sem as tags
    console.log(app1.innerText)

//Altera o conteúdo do elemento app1
    //app1.outerHTML = 'Olá'

//Altera somente o conteúdo interno do elemento app1, renderiza se for uma tag
    app1.innerHTML = '<p>Teste html</p>'

//Altera o conteúdo interno e add as tags(fica como um texto puro)
    //app1.innerText = '<p>Teste html</p>'
