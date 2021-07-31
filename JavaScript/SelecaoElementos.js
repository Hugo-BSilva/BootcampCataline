var idade = document.querySelector('#app input#idade')
//var outro = document.querySelector('#app input#outro')

document.querySelector('#app button').addEventListener
    ('click', function() { alert('Sua idade é: ' + idade.value)
}) 

document.querySelector('#app input#outro').addEventListener
('keyup', function(){alert('Você pressionou as teclas: ' +
    document.getElementById('outro').value)
})
