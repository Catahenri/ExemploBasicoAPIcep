async function buscaCep() {
    var cep = document.getElementById('cep').value
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        document.getElementById("logradouro").value = data.logradouro
        document.getElementById("bairro").value = data.bairro
    } catch (err) {
        console.log('ERROR: api_viacep');
    }
}

$(document).ready(function () {
    $('#logradouro').mask('(00) 00000-0000');
});
