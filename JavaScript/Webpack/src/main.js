//MODO 1 DE IMPORTAÇÃO
//import {sum, subtraction} from './calculator' 

//MODO 2 DE IMPORTAÇÃO
import * as calculator from './calculator'
import sum from './sum'

console.log(calculator.sum(5,5))
console.log(calculator.subtraction(10,3))
console.log(sum(4,5))