document.addEventListener('DOMContentLoaded', function() {
    const cep = document.querySelector('#cep');
    const endereco = document.querySelector('#endereco');
    const bairro = document.querySelector('#bairro');
    const cidade = document.querySelector('#cidade');
    const estado = document.querySelector('#estado');
    const cepMensagem = document.getElementById("cepMensagem");
    const cepValido = /^[0-9]{5}-[0-9]{3}$/;
    const form = document.querySelector('form');
    let validaCep = false;
    
    cep.addEventListener('keyup', async () => {
        
        try{
            if(!cepValido.test(cep.value)){
                throw{erro: 'CEP inválido'};
            }
            else{
                cepMensagem.style.display = "none";
            }

            const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
            if(!response.ok ){
                throw await response.json();
            }

            const responseCep = await response.json();
            if (!("erro" in responseCep)) {
                endereco.value = responseCep.logradouro;
                bairro.value = responseCep.bairro;
                cidade.value = responseCep.localidade;
                estado.value = responseCep.uf;
                validaCep = true;
            } else {
                cepMensagem.style.display = "block";
                limparCamposCep();
                validaCep = false;
            }

        } catch(error){
            if(error?.erro) {
                cepMensagem.style.display = "block";
                limparCamposCep();
            }
        }
    });

    function limparCamposCep() {
        endereco.value = "";
        bairro.value = "";
        cidade.value = "";
        estado.value = "";
        cep.focus();
    }

    cep.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, ''); // Remove tudo que não for dígito
        if (this.value.length > 8) {
            this.value = this.value.slice(0, 8); // Limita a 8 caracteres
        }
        if (this.value.length === 8) {
            this.value = this.value.replace(/^(\d{5})(\d{3})$/, '$1-$2'); // Formata o CEP
        }
    });

    form.addEventListener('submit', function(event) {
        if (!cepValido.test(cep.value) || validaCep===false) {
            event.preventDefault(); // Cancela o envio do formulário
            cepMensagem.style.display = "block";
            limparCamposCep();
        }
    });
});