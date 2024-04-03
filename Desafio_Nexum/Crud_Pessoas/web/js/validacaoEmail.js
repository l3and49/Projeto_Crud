function validarEmail(){
    var email = document.querySelector('#email');
    var error = document.querySelector('#emailMensagem');
    
    if(!email.checkValidity()){
      error.style.display = "block"; 
    }else{
        error.style.display = "none";
    }
     
  }
  
  function redefinirMsg(){
    var error = document.querySelector('#emailMensagem');
    if (error.innerHTML == "Email Inválido"){
      error.style.display = "none";
    }
}

// function validarEmail(){
//     var email = document.getElementById('email');
//     var error = document.getElementById('emailMensagem');
    
//     if(!email.checkValidity()){
//         error.style.display = "block";
//         error.innerHTML = "Email inválido";  
//     } else {
//         error.style.display = "none";
//     }
// }
  
// function redefinirMsg(){
//     var error = document.getElementById('emailMensagem');
//     error.style.display = "none";
// }
