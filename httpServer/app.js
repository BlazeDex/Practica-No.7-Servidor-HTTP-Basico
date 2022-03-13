var http = require('http');

/*http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1');*/

/*Refactorizando.*/
http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1');

/*Al ejecutar el node app la terminal se queda inactiva, no devuelve ningua respuesta. Además de que
no me deja realizar ninguna otra acción, por lo que es necesario cerrar y volver a abrir la terminal
para poder utilizarla de nuevo.*/

/*Cuando igresamos "localhost:1337" en el web browser podemos observar el mensaje "Hello world" en texto
plano.*/

/*Al revisar la sección de Headers o Encabezados podemos observar distintas características y datos, como 
la URL de la solicitud, el método de la solicitud (en este caso fue GET), el código del estado, la dirección 
remota, la conexión, el tipo de contenido, entre otros.*/