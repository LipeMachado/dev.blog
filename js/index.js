function enviarEmail(event) {
    event.preventDefault();
    fetch('https://emailer-api.herokuapp.com/sender', {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({
            emailFrom: document.getElementById('email').nodeValue,
            emailTo: 'silvalipe765@gmail.com',
            name: document.getElementById('name').value,
            message: document.getElementById('message').value
        })
    })
    .then(() => alert('Enviado com Sucesso!'))
    .catch(() => alert('Erro ao enviar o email!'))
}