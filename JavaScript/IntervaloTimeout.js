//Executa uma ação após um período de tempo e permanece executado após esse período
//MODO 1
// setInterval(function(){
//     console.log('Executou')
// }, 2000) //2 segundos

//MODO 2
function doAction(){
    console.log('Executou')
}

setInterval(doAction, 3000)


//Executa uma ação após um período e não executa mais
function Action(){
    console.log('Executou setTimeout')
}

setTimeout(Action, 3000)