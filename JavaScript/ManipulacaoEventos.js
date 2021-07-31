var button = document.querySelector('#app button')
var idade = document.getElementById('idade')

//MODO 2
function MostrarIdadeEProfissao() {
    alert('Minha idade: ' + idade.value + ' e sou ' +
    document.getElementById('profissao').value +'(a)'
)}

//A função MostrarIdadeEProfissao não pode fechar parênteses
button.addEventListener('click', MostrarIdadeEProfissao)


//MODO 1
/*
button.addEventListener('click', function() {
    alert('Minha idade: ' + idade.value + ' e sou ' +
    document.getElementById('profissao').value +'(a)')
})
*/ 


