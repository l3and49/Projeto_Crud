<html>
    <head>
        <title>Exclusão de Cadastro</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <fieldset id="borda-fora">
            <h3>Cadastro a ser excluído</h3>
                <fieldset id="borda-dentro">
                    <form method="get" action="exclui_cadastro.jsp">
                        <label>ID: </label><br>
                        <input id="id_pessoa" type="text" name="id_pessoa" value="<%= request.getParameter("id") %>" readonly><br>
                        <label>Nome: </label><br>
                        <input id="nome_pessoa" type="text" name="nome_pessoa" value="<%= request.getParameter("nome") %>" readonly><br>
                        <label>Email: </label><br>
                        <input id="email_pessoa" type="text" name="email_pessoa" value="<%= request.getParameter("email") %>" readonly><br>
                        <label>CEP: </label><br>
                        <input id="cep_pessoa" type="text" name="cep_pessoa" value="<%= request.getParameter("cep") %>" readonly><br>
                        <input id="cancelar" type="button" value="Cancelar">
                        <input type="submit" value="Excluir">
                </fieldset><br>
        </fieldset>
                    </form>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        <script src="js/deleteStyle.js"></script>
    </body>
</html>
