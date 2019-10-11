const http = require('http');
const server = http.createServer();

server.on('connection', (socket) => {
	console.log("new Connection");
})

server.listen(3000);
