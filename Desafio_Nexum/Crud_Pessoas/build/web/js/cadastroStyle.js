// Adiciona estilo aos elementos

$('body').css({
        'background': '#F5FFFA'
    });

$('#borda-fora').css({
    'padding': '20px',
    'border-radius': '5px',
    'box-shadow': '0 2px 4px rgba(0,0,0,0.1)',
    'margin': '50px auto',
    'max-width': '100%',
    'background': '#F8F8FF'
 });

$('#borda-dentro').css({
    'padding': '20px',
    'border': '1px solid #ccc',
    'border-radius': '5px',
    'box-sizing': 'border-box',
    'margin-bottom': '5px',
    'background': '#FFFAFA'
});

$('label').css({
    'font-weight': 'bold'
});

$('input[type="text"], input[type="email"], select').css({
    'padding': '10px',
    'margin-bottom': '10px',
    'border': '1px solid #ccc',
    'border-radius': '5px',
    'box-sizing': 'border-box'
});
//-------------------------------------------------------------------------------------------------//
$('#nome').css({
    'width':'95%'
});

$('#email').css({
    'width':'100%'
    //'margin-bottom': '20px'
});
//-------------------------------------------------------------------------------------------------//
$('#selectTipoPessoa').css({
    'width':'98%'
});

$('#txtCpf').css({
    'width':'98%'
});

$('#txtCnpj').css({
    'width':'98%'
});

$('#cep').css({
    'width':'98%'
});

$('#endereco').css({
    'background-color':'#D3D3D3',
    'width':'100%'
});
//-------------------------------------------------------------------------------------------------//
$('#numero').css({
    'width':'90%'
});

$('#bairro').css({
    'background-color':'#D3D3D3',
    'width':'100%'
});

$('#cidade').css({
    'background-color':'#D3D3D3',
    'width':'98%'
});

$('#estado').css({
    'background-color':'#D3D3D3',
    'width':'100%'
});
//-------------------------------------------------------------------------------------------------//
$(".divEmail").insertAfter(".divNome");

$('input[type="submit"], input[type="button"], input[type="reset"]').css({
    'background-color': '#007bff',
    'color': '#fff',
    'border': 'none',
    'padding': '10px 20px',
    'border-radius': '5px',
    'cursor': 'pointer'
});

$('input[type="submit"]:hover, input[type="button"]:hover, input[type="reset"]:hover').css({
    'background-color': '#0056b3'
});

$('#botoes-container').css({
    'text-align': 'center'
});
//-------------------------------------------------------------------------------------------------//
$('.divNome').css({
    'display': 'inline-block',
    'width': '40%'
});

$('.divEmail').css({
    'display': 'inline-block',
    'width': '60%',
    'padding-bottom': '20px'
});
//-------------------------------------------------------------------------------------------------//
$('.tipoPessoa').css({
    'display': 'inline-block',
    'width': '15%' // Defina a largura desejada para a div tipoPessoa
});

$('.cpf').css({
    'display': 'inline-block',
    'width': '15%' // Defina a largura desejada para a div CPF
});

$('.cnpj').css({
    'display': 'inline-none',
    'width': '15%' // Defina a largura desejada para a div CPF
});

$('.divCep').css({
    'display': 'inline-block',
    'width': '20%' // Defina a largura desejada para a div CPF
});

$('.divEndereco').css({
    'display': 'inline-block',
    'width': '49%' // Defina a largura desejada para a div CPF
});
//-------------------------------------------------------------------------------------------------//
$('.divNumero').css({
    'display': 'inline-block',
    'width': '15%' // Defina a largura desejada para a div CPF
});

$('.divBairro').css({
    'display': 'inline-block',
    'width': '25%' // Defina a largura desejada para a div CPF
});

$('.divCidade').css({
    'display': 'inline-block',
    'width': '25%' // Defina a largura desejada para a div CPF
});

$('.divEstado').css({
    'display': 'inline-block',
    'width': '34%' // Defina a largura desejada para a div CPF
});