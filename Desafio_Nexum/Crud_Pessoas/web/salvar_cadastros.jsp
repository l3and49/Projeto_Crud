<%@page import="java.sql.Connection"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page contentType="text/html" import="java.util.*, java.text.*" pageEncoding="UTF-8"%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <title>JSP Page</title>
    </head>
    <body>
        <%
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
            
            try{
                //Conexão com o banco de dados

                Connection conecta;
                PreparedStatement st;
                Class.forName("com.mysql.cj.jdbc.Driver");
                conecta = DriverManager.getConnection("jdbc:mysql://localhost:3306/dbnexum", "root", "Nile@2419");

                //Inserir dados
                st = conecta.prepareStatement("INSERT INTO cad_pessoas (nome_completo, email, tipo_pessoa, cpf, cnpj, cep, endereco, numero, bairro, cidade, estado)"
                        + " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);");
                st.setString(1,nomeCompleto);
                st.setString(2,email);
                st.setString(3,tipoPessoa);
                st.setString(4,cpf);
                st.setString(5,cnpj);
                st.setString(6,cep);
                st.setString(7,endereco);
                st.setString(8,numero);
                st.setString(9,bairro);
                st.setString(10,cidade);
                st.setString(11,estado);
                st.executeUpdate();
                %>
                <script>
                    // JavaScript para exibir o alerta
                    alert("Cadastrados com sucesso");
                    window.location.href = "cadastro_pessoas.html";
                </script>
                <%
            } catch (Exception error){
                out.print("Mensagem de erro: " + error.getMessage());
            }
        %>
        <br>
    </body>
</html>
