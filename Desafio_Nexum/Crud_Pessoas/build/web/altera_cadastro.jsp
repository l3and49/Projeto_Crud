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
                id = Integer.parseInt(request.getParameter("txtID"));
                String nomeCompleto, email, tipoPessoa, cpf, cnpj, cep, endereco, numero, bairro, cidade, estado;
                nomeCompleto = request.getParameter("txtNome");
                email = request.getParameter("txtEmail");
                tipoPessoa = request.getParameter("selectTipoPessoa");
                cpf = request.getParameter("txtCpf");
                cnpj = request.getParameter("txtCnpj");
                cep = request.getParameter("txtCep");
                endereco = request.getParameter("txtEndereco");
                numero = request.getParameter("txtNumero");
                bairro = request.getParameter("txtBairro");
                cidade = request.getParameter("txtCidade");
                estado = request.getParameter("txtEstado");
                Connection conecta;
                PreparedStatement st;
                Class.forName("com.mysql.cj.jdbc.Driver");
                conecta = DriverManager.getConnection("jdbc:mysql://localhost:3306/dbnexum", "root", "Nile@2419");

                //Inserir dados
                st = conecta.prepareStatement("update cad_pessoas " +
                                                " set nome_completo = '" + nomeCompleto +"',"
                                                + " email = '" + email +"',"
                                                + " tipo_pessoa = '" + tipoPessoa +"',"
                                                + " cpf = '" + cpf +"',"
                                                + " cnpj = '" + cnpj +"',"
                                                + " cep = '" + cep +"',"
                                                + " endereco = '" + endereco +"',"
                                                + " numero = '" + numero +"',"
                                                + " bairro = '" + bairro +"',"
                                                + " cidade = '" + cidade +"',"
                                                + " estado = '" + estado +"'"
                                                + " where id_pessoa = " + id);                          
                st.executeUpdate();
                %>
                <script>
                    // JavaScript para exibir o alerta
                    alert("Alterado com sucesso");
                    window.location.href = "listaCadastrados.jsp";
                </script>
                <%
            } catch (Exception error){
                out.print("Mensagem de erro: " + error.getMessage());
            }
        %>
        <br><a href="listaCadastrados.jsp">Voltar para lista</a>
    </body>
</html>
