/* === OPERAÇÕES COM ARRAYS ==== */
const numbers = [1,2,3,4,5]

//Para cada item dentro do array, vai ser executada a função
 numbers.forEach(function(number, index){
     console.log(number, index)
})

//Map para criar um novo vetor, assim não modificamos o original
const newNumbers = numbers.map(function (number) {
    return number + 1
})
console.log(newNumbers)

/* Soma todos os números do vetor, reduce reduz todo vetor em 
uma única variavel. Parâmetro total inicia com 0, next com o valor
da posição 0 que é 1, e vai somando até que chegue no fim do vetor */
const total = numbers.reduce(function (total, next) {
    return total + next
})
console.log(total)


/* === OPERAÇÕES COM ARRAYS (DE OBJETOS)==== */
const toDos = [
    {text: 'lavar a louça', done: false},
    {text: 'apanhar o lixo', done: true},
    {text: 'dobrar as roupas', done: true},
]

//Filtra no vetor os casos que estão como true
const doneTodos = toDos.filter(function (todo){
    return todo.done
})
//Função anônima
const doneTodosReduzido = toDos.filter((todo) => todo.done)
//Encontra no vetor o objeto que possui a string dobrar as roupas
const find = toDos.find(function (todo) {
    return todo.text == 'dobrar as roupas'
})
//Retorna o indice do objeto lavar a louça
const index = toDos.findIndex(function (todo) {
    return todo.text = 'lavar a louça'
})
console.log(doneTodos)
console.log(find)
console.log(index)


const cars = ['fusca', 'civic', 'hb20']

//Retorna True quando encontra um carro fusca
const hasFusca = cars.some(function (car) {
    return car == 'fusca'
})
console.log(hasFusca)


/* === ARROW FUNCTIONS === */
// function anything() {
//     console.log('hello world')
// }
const anything = () => console.log('hello world')

anything()

/* === PARÂMETRO PADRÃO === */
//Caso não passe um nome, o padrão é Fulano
// function sayHello(name = 'Fulano') {
//     console.log('Olá' + name)
// }
// sayHello()

const sayHello = (name = 'Fulano') => console.log('Olá ' + name)

sayHello()


/* === TEMPLATE STRING === */
const showProduct = (product, price) => {
    //console.log('O valor de ' + product + ' é R$ ' + price + ', pode comprar!')
    console.log(`O valor de ${product.toUpperCase()} é R$ ${Math.round(price)} pode comprar!`)
}
showProduct('Camisa', 15.5)

/* === OBJET SHORT SYNTAX / SINTAXE CURTA DE OBJETO === */
const name = 'camisa'
const price = 20

const product = {
    name,
    price,
    inStock: true
}
console.log(product)


/* === DESESTRUTURAÇÃO === */
const fruits = ['laranja', 'morango', 'maçã']

// const a = fruits[0]
// const b = fruits[1]
//console.log(a,b)
const [a, b] = fruits
console.log(a,b)

const person = {
    firstName: 'Hugo',
    secondName: 'Silva',
    age: 21,
    adress:{
        city: 'Suzano',
        region: 'SP',
    },
}

// const firstname = person.firstName
// const secondName = person.secondName
// const city = person.adress.city
const {firstName, secondName, adress:{city}} = person
console.log(person)

const showFullName = ({firstName, secondName})=>{
    console.log(`${firstName} ${secondName}`)
}
showFullName(person)


/* === OPERADORES REST/SPREAD === */
const n = [1, 2, 3, 4, 5]
const personagem = {
    namee:'Hugo',
    age: 21,
    height: 1.63,
    company: 'Recovery',
}

//Trás todo o resto do vetor 
//const [first, second, ...rest] = n
const {namee, ...rest} = personagem
console.log(rest)


//Função utilizando REST
const somase = (...params) => {
    return params.reduce((total, next) => total + next)
}

console.log(somase(5,5,10,10))


//SPREAD, pega de um lugar e coloca em outro
const num1 = [1,2,3,4,5]
const num2 = [6,7,8,9,10]

const numbersTog = [...num1, ...num2]
console.log(numbersTog)

const personagem1 = {
    ...personagem,
    namee: 'João',
}

console.log(personagem1)