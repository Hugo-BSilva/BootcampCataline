var button = document.querySelector('#app button')
var input = document.querySelector('#app input')

button.addEventListener('click', function(){
    var xrh = new XMLHttpRequest()

    //Abre uma nova requisição do tipo GET para obter algo
    /* INSPECIONAR > NETWORK vai ver que fez uma requisição de users na api do github*/
    xrh.open('GET', 'https://api.github.com/users')
    xrh.send()

    //Quando o status da requisição mudar, executa a função
    xrh.onreadystatechange = function(){
        //Quando a requisição estiver realmente pronta
        if (xrh.readyState === 4) {
            //console.log(xrh.responseText) como está em formato de texto, não da pra fazer muita coisa com ela

            //1 MODO
            //console.log(JSON.parse(xrh.responseText))

            //2 MODO, mostra apenas o usuário com indice 0
            var data = JSON.parse(xrh.responseText)
            console.log(data[0].login)
        }
    }
})