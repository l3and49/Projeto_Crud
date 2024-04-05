 $(document).ready(function() {
    var imagem = $('<img>').attr({
        'src': 'imgs/logoNexum.png',
        'style': 'float: left; width: 150px; height: auto; margin-bottom: 50px'
    });

    // Adiciona a barra lateral com os botões de cadastro e lista
    var sidebar = $('<div>').css({
        'background-color': '#333',
        'color': 'white',
        'width': '200px',
        'height': '100%',
        'position': 'fixed',
        'top': '0',
        'left': '0px',
        'padding': '20px',
        'box-sizing': 'border-box',
        'transition': 'left 0.3s'
    });
    var btnHome = $('<button>').html('<i class="bi bi-house-door-fill"></i>').append(' Home').css({
            'font-size': '16px',
            'padding': '10px 20px',
            'margin-bottom': '10px',
            'background-color': '#555',
            'color': 'white',
            'border': 'none',
            'border-radius': '5px',
            'cursor': 'pointer',
            'width': '100%'
    }).click(function() {
        window.location.href = 'index.html';
    });
    var btnCadastro = $('<button>').html('<i class="bi bi-person-fill-add"></i>').append(' Cadastrar').css({
        'font-size': '16px',
        'padding': '10px 20px',
        'margin-bottom': '10px',
        'background-color': '#555',
        'color': 'white',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer',
        'width': '100%'
    }).click(function() {
        window.location.href = 'cadastro_pessoas.html';
    });
    var btnLista = $('<button>').html('<i class="bi bi-person-lines-fill"></i>').append(' Lista de Cadastros').css({
        'font-size': '16px',
        'padding': '10px 20px',
        'margin-bottom': '10px',
        'background-color': '#555',
        'color': 'white',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer',
        'width': '100%'
    }).click(function() {
        window.location.href = 'listaCadastrados.jsp';
    });
    sidebar.append(imagem).append(btnHome).append(btnCadastro).append(btnLista);
    $('body').prepend(sidebar);

    // Adiciona a transição de margem esquerda para o texto "Seja Bem-vindo!"
    $('.bem-vindo').css({
        'margin-left': '0',
        'transition': 'margin-left 0.3s'
    });

    // Quando o botão Slide for clicado, ajusta a margem esquerda do texto e da div 'conteudo'
    var btnSlide = $('<button>').css({
        'position': 'fixed',
        'top': '3px',
        'left': '205px',
        'font-size': '16px',
        'padding': '10px',
        'background-color': '#555',
        'color': 'white',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer',
        'transition': 'left 0.3s'
    }).html('<i class="bi bi-sliders"></i>').click(function() {
        var left = sidebar.css('left');
        if (left === '-200px') {
            sidebar.css('left', '0');
            $(this).css('left', '205px');
            $('.bem-vindo, .conteudo').css('margin-left', '30px');
        } else {
            sidebar.css('left', '-200px');
            $(this).css('left', '10px');
            $('.bem-vindo, .conteudo').css('margin-left', '0');
        }
    });
    $('body').prepend(btnSlide);

    // Estiliza o restante do conteúdo
    $('body').css({
        'margin-left': '100px',
        'background': 'linear-gradient(to right, #7FFFD4, #FFFFFF)',
        'text-align': 'center',
        'height': '100vh',
        'display': 'flex',
        'flex-direction': 'column', // Alinha os elementos verticalmente
        'justify-content': 'center',
        'align-items': 'center'
    });

    // Estiliza o texto "Seja Bem-vindo!"
    $('.bem-vindo').css({
        'margin-top': '-200px', // Adiciona um espaçamento entre o topo da página e o texto
        'font-size': '30px' // Reduz o tamanho da fonte para 30 pixels
    });

    // Estiliza o restante do conteúdo
    $('.conteudo').css({
        'margin-top': '20px', // Adiciona um espaçamento entre o texto e o restante do conteúdo
        'font-family': 'Arial, sans-serif', // Altera a fonte para Arial ou outra fonte sans-serif
        'font-size': '18px' // Altera o tamanho da fonte para 18 pixels
    });
});