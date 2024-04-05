$(function () {

    // Estiliza a tabela
    $("table").css({
        'border-collapse': 'collapse',
        'width': '80%',
        'margin': '20px auto'
    });
    $("th, td").css({
        'border': '1px solid #ddd',
        'padding': '8px',
        'text-align': 'left'
    });
    $("th").css('background-color', '#f2f2f2');
    $("tr:nth-child(even)").css('background-color', '#f2f2f2');
    $("tr:hover").css('background-color', '#ddd');
    $("a").css({
        'color': 'blue',
        'text-decoration': 'none',
        'margin-right': '10px'
    });
});