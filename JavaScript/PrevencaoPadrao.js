var link = document.querySelector('#app a')
var button = document.querySelector('#app button')
var idade = document.getElementById('idade')

/* Ao clicar em enviar a página não será recarregada(dentro do formulário é normal
que o evento preventDefault esteja desabilitado, quando o usuário clicar em enviar
o formulário será enviado) */
button.addEventListener('click', function(event){
    event.preventDefault()
    console.log('Sua idade é: ' + idade.value)
})

//O comportamento padrão seria adicionar o '#' na URL, essa função vai prevenir isso
link.addEventListener('click', function(event){
    event.preventDefault()
    console.log('O Link foi clicado')
})
