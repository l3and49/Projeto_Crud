document.addEventListener('DOMContentLoaded', function() {
    var selectTipoPessoa = document.getElementById('selectTipoPessoa');
    var cpfDiv = document.getElementById('cpf');
    var cnpjDiv = document.getElementById('cnpj');
    var cpfSelect = document.getElementById('txtCpf');
    var cnpjSelect = document.getElementById('txtCnpj');

    selectTipoPessoa.addEventListener('change', function() {
        cpfSelect.value = "";
        cnpjSelect.value = "";
        if (selectTipoPessoa.value === 'PF') {
            cpfSelect.required = true;
            cnpjSelect.required = false;
            cpfDiv.style.display = 'block';
            cnpjDiv.style.display = 'none';
        } else if (selectTipoPessoa.value === 'PJ') {
            cpfSelect.required = false;
            cnpjSelect.required = true;
            cpfDiv.style.display = 'none';
            cnpjDiv.style.display = 'block';
        }
    });
});
