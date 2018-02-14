var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/index') {
    	fs.readFile('./index.html', 'utf-8', function(err, html) {
	        response.write('<h1>index.html</h1>');
	        response.write(html);
			 response.end();
		});	 
    } else {
        fs.readFile("./statusCode404.jpg", "binary", function(error, file) {
	        response.writeHead(200, {"Content-Type": "image/jpg"});
	        response.write(file, "binary");
	        response.end();
	    });
	}
 });

server.listen(8084);