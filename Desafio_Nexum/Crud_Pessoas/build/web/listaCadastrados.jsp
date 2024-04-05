<%@page import="java.sql.Connection"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Listagem de Pessoas</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    </head>
    <body>
        <center><h1>Lista de Cadastrados</h1></center>
        <%
            try {
                //Conexão com o banco de dados

                Connection conecta;
                PreparedStatement st;
                Class.forName("com.mysql.cj.jdbc.Driver");
                conecta = DriverManager.getConnection("jdbc:mysql://localhost:3306/dbnexum", "root", "Nile@2419");

                //Inserir dados
                st = conecta.prepareStatement("SELECT * FROM cad_pessoas");
                ResultSet rs = st.executeQuery();
                %>
                <table border = "1">
                    <tr>
                        <th>Id</th><th>Nome Completo</th><th>Email</th><th>CEP</th><th>Opções</th>
                    </tr>
                <%
                while(rs.next()){
                %>
                    <tr>
                        <td><%=rs.getString("id_pessoa")%></td>
                        <td><%=rs.getString("nome_completo")%></td>
                        <td><%=rs.getString("email")%></td>
                        <td><%=rs.getString("cep")%></td>
                        <td>
                            <a href="lista_cadastro_alterar.jsp?id=<%=rs.getString("id_pessoa")%>&nome=<%=rs.getString("nome_completo")%>&email=<%=rs.getString("email")%>&tipo_pessoa=<%=rs.getString("tipo_pessoa")%>&cpf=<%=rs.getString("cpf")%>&cnpj=<%=rs.getString("cnpj")%>&cep=<%=rs.getString("cep")%>&endereco=<%=rs.getString("endereco")%>&numero=<%=rs.getString("numero")%>&bairro=<%=rs.getString("bairro")%>&cidade=<%=rs.getString("cidade")%>&estado=<%=rs.getString("estado")%>">Alterar Cadastro</a><br>
                            <a href="lista_cadastro_excluir.jsp?id=<%=rs.getString("id_pessoa")%>&nome=<%=rs.getString("nome_completo")%>&email=<%=rs.getString("email")%>&cep=<%=rs.getString("cep")%>">Excluir Cadastro</a>
                        </td>
                    </tr>
                <%
                }
                %>
                </table>
                <%
            } catch (Exception error) {
                out.print("Mensagem de erro: " + error.getMessage());
            }
        %>
        <script src="js/styleListagem.js"></script>
    </body>
    <script src="js/slideBar.js"></script>
</html>
