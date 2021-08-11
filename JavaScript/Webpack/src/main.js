//MODO 1 DE IMPORTAÇÃO
//import {sum, subtraction} from './calculator' 

//MODO 2 DE IMPORTAÇÃO
import * as calculator from './calculator'
import sum from './sum'

console.log(calculator.sum(5,5))
console.log(calculator.subtraction(10,3))
console.log(sum(4,5))
/*=========================================================== */

/* ========= ASYNC/WAIT ========= */
const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout(() => {
        resolve('ok')
    }, 2000);
}).catch((error) => {
    console.warn(error)
})


// myPromise().then((response) => {
//     console.log('primeira vez')

//     myPromise().then((response) => {
//         console.log('segunda vez')

//         myPromise().then((response) => {
//             console.log('terceira vez')
//         })
//     })
// })

async function exec() {
    try {
        //const response = await myPromise() //await(espera) só funciona dentro de uma async
        await myPromise()
        console.log('primeira vez')

        await myPromise()
        console.log('segunda vez')

        await myPromise()
        console.log('terceira vez')
    } catch (error) {
        console.warn(error)
    } finally {
        console.log('Finalizou')
    }
}

exec()
/*=========================================================== */

/* ========= ASYNC/WAIT ========= */