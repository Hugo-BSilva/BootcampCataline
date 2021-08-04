var button = document.querySelector('#app button')

button.addEventListener('click', function(){
    axios.get('https://api.github.com/users')
    .then(function (response){ //Quando a execução for feita e caso de certo
        console.log(response.data[0].login)
    })
    .catch(function (error){ //Caso não de certo
        console.log(error)
    })
    .finally(function (){ //É executado toda vez que a requiição finalizar (axios.get)
        console.log('finalizou')
    })
})