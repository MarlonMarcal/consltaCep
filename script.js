var formulario = document.querySelector('form')

var xhr = new XMLHttpRequest();

formulario.addEventListener('submit', function(e){


  e.preventDefault()

  let CNPJ = document.getElementById('cnpj').value

  let resposta = document.getElementById('content')

  let html = ''

  xhr.open("GET", 
  "https://viacep.com.br/ws/" + CNPJ + "/json/", true );

  xhr.send();

  xhr.responseType = "json"
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      dados = xhr.response;
      
      html = '<b>Logradouro:</b> '+ dados.logradouro + '<br>'+
      '<b>Complemento:</b> '+ dados.complemento + '<br>'
      html = html + '<b>Bairro:</b> '+ dados.bairro + '<br>' + '<b>Cidade:</b> ' + dados.localidade + ' '+ dados.uf
      resposta.innerHTML = html

    }else{

      if(xhr.readyState == 4 && xhr.status != 200 ){
        resposta.innerHTML = '<h2>Falha ao Consultar</h2>'
      }else{
        resposta.innerHTML = '<h2>Carregando..</h2>'
      }

    }

  }


    
})

  


