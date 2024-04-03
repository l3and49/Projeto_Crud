<html>
    <head>
        <title>Exclusão de Cadastro</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <form method="get" action="exclui_cadastro.jsp">
            <label>ID: </label><br>
            <input id="id_pessoa" type="number" name="id_pessoa" value="<%= request.getParameter("id") %>" readonly><br>
            <label>Nome: </label><br>
            <input id="nome_pessoa" type="text" name="nome_pessoa" value="<%= request.getParameter("nome") %>" readonly><br>
            <label>Email: </label><br>
            <input id="email_pessoa" type="text" name="email_pessoa" value="<%= request.getParameter("email") %>" readonly><br>
            <label>CEP: </label><br>
            <input id="cep_pessoa" type="text" name="cep_pessoa" value="<%= request.getParameter("cep") %>" readonly><br>
            <input id="cancelar" type="button" value="Cancelar">
            <input type="submit" value="Excluir">
            <script>
                document.getElementById("cancelar").addEventListener("click", function() {
                    window.location.href = "listaCadastrados.jsp";
                });
            </script>
        </form>
    </body>
</html>
