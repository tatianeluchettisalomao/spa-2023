document.querySelector('#btnConsultar').addEventListener('click',function(e){

    let cep= document.querySelector('#cep').value;
    fetch('https://viacep.com.br/ws/' + cep +'/json/', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (resposta) {
            resposta.json().then (function(dados) {
                document.querySelector('#cidade').innerHTML = dados['localidade'];
            })
    });
    
    //alert(cep);
    
});
