// HTTP es el protocolo utilizado para realizar la solicitud a la API de contactos.
// GET se utiliza para obtener la lista de contactos desde la API.
// POST se utiliza para enviar un nuevo contacto a la API.
// La función fetch por default utiliza el método de HTTP GET.

function cargarContactos(){
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = '<p>Cargando contactos...</p>';
    fetch('https://www.raydelto.org/agenda.php')
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            contenido.innerHTML = '';
            datos.forEach(function (contacto) {
                const contactoDiv = document.createElement('div');
                contactoDiv.innerHTML = `<p>Nombre: ${contacto.nombre}</p>
                                         <p>Apellido: ${contacto.apellido}</p>
                                         <p>Telefono: ${contacto.telefono}</p>`;
                contenido.appendChild(contactoDiv);
            });
        })
        .catch(function (error) { // Si pasa al algún error al cargar los contactos
            contenido.innerHTML = '<p>Error al cargar los contactos.</p>';
            console.error('Error:', error);
        });
}