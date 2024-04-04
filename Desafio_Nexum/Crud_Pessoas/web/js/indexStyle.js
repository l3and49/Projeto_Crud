$(document).ready(function() {
    // Adiciona o botão de cadastro
    var btnCadastro = $('<button>').text('Cadastrar').click(function() {
        window.location.href = 'cadastro_pessoas.html';
    });
    $('#div-mae').append(btnCadastro);

    // Adiciona o botão de lista de cadastrados
    var btnLista = $('<button>').text('Lista de Cadastrados').click(function() {
        window.location.href = 'listaCadastrados.jsp';
    });
    $('#div-mae').append(btnLista);

    // Estiliza os botões
    $('button').css({
        'font-size': '30px',
        'padding': '10px 20px',
        'margin': '10px',
        'background-color': '#363636',
        'color': 'white',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer',
        'transition': 'background-color 0.3s, color 0.3s'
    });
    $('button:hover').css('background-color', '#0056b3');

    //Estiliza o body
    $('body').css({
        'background-color': '#00FFFF',
        'text-align': 'center',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'flex-end',
        'height': '50vh'
    });

    //Estiliza o H1
    $('h1').css({
        'font-size': '50px'
    });
});