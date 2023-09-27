document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault(); //previene el comportamiento predeterminado del formulario (recargar la página cuando se envía)


    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;


    const dataForm = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };


    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(dataForm),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('respuesta').innerHTML = 'Respuesta del servidor: ' + JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});