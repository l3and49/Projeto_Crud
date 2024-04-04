$(document).ready(function() {
    // Cria o cabeçalho
    var header = $('<header>').css({
        'background-color': '#00FFFF',
        'color': 'black',
        'text-align': 'center',
        'margin-bottom': '5px', 
    }).append($('<h2>').text('CRUD de Pessoas').css({
        'font-size': '30px',
        'margin-top': '-5px',
        'margin-bottom': '-5px'
    }));

    // Cria a barra de navegação
    var nav = $('<nav>').css({
        'background-color': '#E0FFFF',
        'padding': '15px 0',
        'text-align': 'center',
    }).append(
        $('<a>').attr('href', 'index.html').text('Home').addClass('botao'),
        $('<a>').attr('href', 'cadastro_pessoas.html').text('Cadastrar Pessoas').addClass('botao'),
        $('<a>').attr('href', 'listaCadastros.jsp').text('Lista de Cadastros').addClass('botao')
    );

    // Adiciona os elementos ao body
    $('body').prepend(header, nav);

    $('.botao').css({
        'display': 'inline-block',
        'padding': '10px 20px',
        'margin-right': '10px',
        'background-color': '#007bff',
        'color': 'white',
        'text-decoration': 'none',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer'
    });

    // Adiciona efeito de hover nos botões
    $('.botao').hover(function() {
        $(this).css({
            'background-color': '#0056b3'
        });
    }, function() {
        $(this).css({
            'background-color': '#007bff'
        });
    });
});