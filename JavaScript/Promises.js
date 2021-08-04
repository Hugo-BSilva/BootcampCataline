var button = document.querySelector('#app button')
var idade = document.querySelector('#app input')

function MostrarIdade() {
    alert('Minha idade: ' + idade.value
)}

button.addEventListener('click', MostrarIdade)

var voceComprouOsProdutos = new Promise(function (resolve, reject){
    setTimeout(function (){
        var products = ['Camisa', 'Sapato', 'Calça']
        //resolve(products)
        reject('deu ruim')
    }, 3000)
})

/*.then vai ser chamado apenas em caso de resolução, quando o resolve() for feito,
o then vai ser disparado. Caso a promessa caia na rejeição, o bloco catch vai ser
disparado */
voceComprouOsProdutos.then(function(products){
    console.log('Deu Certo, produtos: ' + products)
}).catch(function(error){
    console.log('A promessa falhou: ' + error)
})