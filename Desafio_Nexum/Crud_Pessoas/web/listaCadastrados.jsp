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
        <link rel="index.html">
    </head>
    <body>
    <center>
        <h1>Lista de Cadastros</h1>
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
                    <h1>
                        <a href="index.html">Home</a>
                        <a href="cadastro_pessoas.html">Cadastrar Pessoas</a>
                    </h1>
                    <%
                } catch (Exception error) {
                    out.print("Mensagem de erro: " + error.getMessage());
                }
            %>
        </center>
    </body>
</html>
