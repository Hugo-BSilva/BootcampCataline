import { createApp } from 'vue'
import Todos from './api/todos'
import './assets/css/main.css'

const apiTodos = new Todos()

//Recebe um argumento que e um objeto de opcoes
const app = createApp({
    //Dados da aplicacao que serao renderizados em tela
    data() {
      return {
        todos: [ ],
        form: {
          text: ' ',
          done: false
        }
      }
    },
    created(){
      this.fetchTodos()
    },
    methods: {
      async fetchTodos(){
        this.todos = await apiTodos.index()
        console.log(this.todos)
      }
    },
    async createTodo(){
      const data = await apiTodos.store(this.form)
      this.todos.push(data)
    },
})

//Pega o APP vue e monta ele na tag #app
app.mount('#app')

// async function exec(){   
//     const response = await apiTodos.index()
//     // const update = await todos.update({
//     //     id: 5,
//     //     text: 'Sair com namorada',
//     //     done: true})
//     //const create = await todos.create({text:'Cortar cabelo', done: true})
//     //const del = await todos.del({id:0})
//     //console.log(del)
//     //console.log(create)
//     console.log(response)
// }

// exec()
