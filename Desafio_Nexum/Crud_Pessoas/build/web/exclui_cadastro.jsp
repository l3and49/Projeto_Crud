<%@page import="java.sql.Connection"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page contentType="text/html" import="java.util.*, java.text.*" pageEncoding="UTF-8"%>
<html>
    <head>
        <title>Exclusão de Cadastro</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <%
            try{
                int id;
                id = Integer.parseInt(request.getParameter("id_pessoa"));
                Connection conecta;
                PreparedStatement st;
                Class.forName("com.mysql.cj.jdbc.Driver");
                conecta = DriverManager.getConnection("jdbc:mysql://localhost:3306/dbnexum", "root", "Nile@2419");

                //Inserir dados
                st = conecta.prepareStatement("DELETE FROM cad_pessoas WHERE id_pessoa = " + id);
                st.executeUpdate();
                
            } catch (Exception error){
                out.print("Mensagem de erro: " + error.getMessage());
            }
            %>
            <script>
                    // JavaScript para exibir o alerta
                    alert("Alterado com sucesso");
                    window.location.href = "listaCadastrados.jsp";
            </script>
    </body>
</html>
