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
            'left': '-200px',
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

        // Quando o botão Slide for clicado, ajusta a margem esquerda do texto e da div 'conteudo'
        var btnSlide = $('<button>').css({
            'position': 'fixed',
            'top': '3px',
            'left': '10px',
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
                $('table').css('margin-left', '200px');
                $('h1').css('margin-left','100px');
            } else {
                sidebar.css('left', '-200px');
                $(this).css('left', '10px');
                $('table').css('margin-left','100px');
                $('h1').css('margin-left','50px');
            }
        });
        $('body').prepend(btnSlide);
});