let http = require('http');

let server = new http.Server();

server.listen(1337, '127.0.0.1');

let counter = 0;

let emit = server.emit;
server.emit = function(event){
    //console.log(event);
    //console.log(arguments);
    emit.apply(server, arguments);
}

server.on('request', (req, res) => {
    console.log(req.method, req.url);

    counter++;
    res.end(`Hello world! ${counter}`);
})