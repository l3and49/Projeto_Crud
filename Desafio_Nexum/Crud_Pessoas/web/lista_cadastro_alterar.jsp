<html>
    <head>
        <title>Alteraï¿½ï¿½o de Cadastro</title>
        <meta charset="UTF-8">
        <script src="js/validacaoEmail.js"></script>
        <script src="js/scriptTipoPessoa.js"></script>
        <script src="js/mascaraEValidacao.js.js"></script>
        <script src="js/scriptCEP.js"></script>
    </head>
    <body>
        <form method="post" action="altera_cadastro.jsp" autocomplete="off">
        <fieldset>
            <h3>Dados da pessoa</h3>
            <fieldset>
                <div class="divId" style="display: none">
                    <label for="idPessoa">ID: </label><br>
                    <input type="text" name="txtID" id="id" value="<%= request.getParameter("id")%>"><br>
                </div>
                <div class="divNome">
                    <label for="nome">Nome Completo: </label><br>
                    <input type="text" name="txtNome" id="nome" maxlength="50" value="<%= request.getParameter("nome")%>" required><br>
                </div>
                <div class="divEmail">
                    <label for="email" >Email:</label><br>
                    <input type="email" name="txtEmail" onblur="validarEmail()" onfocus="redefinirMsg()" id="email" maxlength="100" value="<%= request.getParameter("email")%>" required/><br>
                    <span id="emailMensagem" style="color: red; display: none; font-size: small;">Email Inválido</span>
                </div>
                <div class="tipoPessoa" id="tipoPessoa">
                    <label for="selectTipoPessoa">Tipo de Pessoa: </label><br>
                    <select id="selectTipoPessoa" name="selectTipoPessoa" value="<%= request.getParameter("tipo_pessoa")%>" required ><br>
                        <option value="Fisica">Pessoa Física</option>
                        <option value="Juridica">Pessoa Jurídica</option>
                    </select><br>
                </div>
                <div class="cpf" id="cpf" style="display: block;">
                    <label for="cpf" id="cpf">CPF: </label><br>
                    <input type="text" name="txtCpf" id="txtCpf" value="<%= request.getParameter("cpf")%>" required><br>
                    <span id="cpfMensagem" style="color: red; display: none; font-size: small;">CPF inválido</span>
                </div>
                <div class="cnpj" id="cnpj" style="display: none;">
                    <label for="cnpj" id="cnpj" >CNPJ: </label><br>
                    <input type="text" name="txtCnpj" id="txtCnpj" value="<%= request.getParameter("cnpj")%>"><br>
                    <span id="cnpjMensagem" style="color: red; display: none; font-size: small;">CNPJ inválido</span>
                </div>
                <div class="divCep">
                    <label for="cep">CEP: </label><br>
                    <input type="text" name="txtCep" id="cep" value="<%= request.getParameter("cep")%>" required><br>
                    <span id="cepMensagem" style="color: red; display: none; font-size: small;">CEP inválido</span>
                </div>
                <div class="divEndereco">
                    <label for="endereco">Endereço: </label><br>
                    <input type="text" name="txtEndereco" id="endereco" value="<%= request.getParameter("endereco")%>" readonly required><br>
                </div>
                <div class="divNumero">
                    <label for="numero">Número: </label><br>
                    <input type="text" pattern="[0-9]+-?[0-9]*" name="txtNumero" id="numero" value="<%= request.getParameter("numero")%>" required><br>
                </div>
                <div class="divBairro">
                    <label for="bairro">Bairro: </label><br>
                    <input type="text" name="txtBairro" id="bairro" value="<%= request.getParameter("bairro")%>" readonly required><br>
                </div>
                <div class="divCidade">
                    <label for="cidade">Cidade: </label><br>
                    <input type="text" name="txtCidade" id="cidade" value="<%= request.getParameter("cidade")%>" readonly required><br>
                </div>
                <div class="divEstado">
                    <label for="estado">Estado: </label><br>
                    <input type="text" name="txtEstado" id="estado" value="<%= request.getParameter("estado")%>" readonly required><br>
                </div><br>
                <input id="voltarDados" type="reset" value="Dados Origniais">
                <input id="Limpar" type="button" onclick="limparCampos()" value="Limpar">
            </fieldset><br>
            <input id="cancelar" type="button" value="Cancelar">
            <input type="submit" value="Alterar">
            <script>
                document.getElementById("cancelar").addEventListener("click", function() {
                    window.location.href = "listaCadastrados.jsp";
                });
                function limparCampos() {
                    const nome = document.getElementById("nome");
                    const email = document.getElementById("email");
                    const cpf = document.getElementById("cpf");
                    const cnpj = document.getElementById("cnpj");
                    const cep = document.getElementById("cep");
                    const endereco = document.getElementById("endereco");
                    const numero = document.getElementById("numero");
                    const bairro = document.getElementById("bairro");
                    const cidade = document.getElementById("cidade");
                    const estado = document.getElementById("estado");
                    
                    nome.value = "";
                    email.value = "";
                    cpf.value = "";
                    cnpj.value = "";
                    cep.value = "";
                    endereco.value = "";
                    numero.value = "";
                    bairro.value = "";
                    cidade.value = "";
                    estado.value = "";
                }
            </script>
        </fieldset>
    </form>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="js/cadastroStyle.js"></script>
    </body>
</html>
