import { sum } from './calculator.js'
import users from '@/Users/hugob/Documents/BootCampCataline/Bootcamp_Cataline/TypeScript/CURSO-TYPESCRIPT/src/controllers/http/Users'

//TYPE UNION
let age: number | string

age = 20

age = 'vinte'


//TYPE ALIASES
type Pet = 'dog' | 'cat' | 'Zebra'

function showPet(pet:Pet) {
    console.log(pet)
}

function displayPet(pet:Pet) {
    console.log(pet)
}

//TYPE ASSERTION
//const inputName = document.querySelector('#name') as HTMLInputElement | null

//inputName.value


//INTERFACES
type UF = 'PE' | 'SP' | 'MG'

interface User {
    readonly name: string, //Não permite alterar a variável posteriormente
    address?: { //Essa é uma propriedade opcional
        city: string
        UF: UF
    }
    sayHello: () => void
}

function showCity(user:User) {
    user.sayHello = () => console.log('hello world')
    return user.address ? user.address.city : 'Não exist'
    //OU return user.address?.user
}


//IMPLEMENTS E EXTENDS
interface Veiculo{
    rodas: number
    acelerar: () => void
    frear?: () => void
}

interface Moto extends Veiculo {
    capacete: boolean
    empinar: () => void
}

class CriarVeiculo implements Veiculo{
    rodas: number

    constructor(rodas: number){
        this.rodas = rodas
    }

    acelerar(){
        console.log('ACELEROU')
    }
}

let bross: Moto
//bross.acelerar


//PICK & OMIT
interface Post {
    id: number
    title: string
    description: string
}
interface Post1 {
    id: number
    title: string
    description: string
    slug: string
    comments: any[]
    likes: number
    views: number
    sahres: number
}

type PostPreview = Pick<Post, 'id' | 'title'> //Pega os dados da interface e cria um novo tipo
type PostPreview1 = Omit<Post, 'id'> //Pega todos os dados, menos o id

let post: PostPreview 

//post.id = 0

//PERMITINDO JAVASCRIPT
console.log(sum(5,5))


//PATH MAPPING
//users()


//DECORATORS
