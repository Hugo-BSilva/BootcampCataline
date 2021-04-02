//Reaprendendo primeiros passos
var name = 'Hugo Silva'
var age = 21
var resultado = age >= 18? 'ok': 'Menor' //Op Ternário
var weight = 60.2
var alive = false
var food = null
var time
var product = 'TV'
var price = 400

var fruits = ['Morango', 'Banana', 'Maçã']
var list = ['',21,60.2,false,null]
var person = {
    name: 'Hugo Silva', 
    age: 19, 
    alive: true
} //Objeto

console.log(typeof name)
console.log(fruits)

console.log('O preço da '+product+' é $' + price)

//Funções
function action() {
    console.log('Realiza uma ação')
}
function soma(a,b){
    var result = a + b
    return result
}

action()
console.log(soma(5,2))

//Condição
var isActive = true
var message = ''

if (isActive == true){
    message = 'true'
    console.log(message)
} else {
    message = false
    console.log(message)
}

//Repetição
for (var count=0; count <= 10; count++){
    console.log(count)
}

var i = 0
while (i <= 5) {
    console.log(i)
    i++
}

//Operações em String
var person = {
    name: 'João Silva',
    height: 7.5,
    sayHello: function(){
        console.log('Hello')
    }
}
person.sayHello()

var text = 'hello cataline'
//text.length //Retorna a quantidade de caracteres incluindo os espaços
//replace('o', '@') //substitui o 'O' por @
var value = text.split(' ') //Divide uma string em um array de strings
console.log(value)

//Operações em números
var number = 10.6
var newValue = Math.round(number)
console.log(newValue)

//Operação com vetor
var array = ['joão', 'oliver', 'maria']
for (var i = 0; i < array.length; i++) {
    console.log(array[i])  
}

//Permite encontrar um valor dentro de um arraye mostra a posição
var vvalue = array.indexOf('joão')
console.log(vvalue)

//Colocar elementos dentro do array
array.push('tedio')
console.log(array)

//Deleta o valor de um array, em uma posição específica
array.splice(1, 1) //Deleta na posição 1, apenas 1 vez
console.log(array)

//Operação com objeto
var pessoa = {
    name: 'João Silva',
    age: 23,
}
//Para que o objeto não sofra alterações ao longo do código
//Object.freeze(pessoa)

var aanny ={
    width: 200
}

//Mesclar informaçãos dos dois objetos
var newObject = Object.assign(pessoa,aanny)
console.log(newObject)