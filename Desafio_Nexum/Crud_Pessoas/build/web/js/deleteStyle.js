$(document).ready(function() {
    $("#cancelar").click(function() {
        window.location.href = "listaCadastrados.jsp";
    });

    $('body').css({
        'background': '#F5FFFA'
    });
    
    // Adiciona estilo aos elementos
    $('#borda-fora').css({
        'padding': '20px',
        'border-radius': '5px',
        'box-shadow': '0 2px 4px rgba(0,0,0,0.1)',
        'margin': '60 auto',
        'max-width': '30%',
        'background': '#F8F8FF'
    });

    $('#borda-dentro').css({
        'padding': '20px',
        'border': '1px solid #ccc',
        'border-radius': '5px',
        'box-sizing': 'border-box',
        'margin-bottom': '10px',
        'background': '#FFFAFA'
    });

    $('label').css({
        'font-weight': 'bold'
    });

    $('input[type="text"], input[type="email"], select').css({
        'width': '100%',
        'padding': '10px',
        'margin-bottom': '10px',
        'border': '1px solid #ccc',
        'border-radius': '5px',
        'box-sizing': 'border-box'
    });

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
});
