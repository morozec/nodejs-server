let http = require('http');
let url = require('url');

let server = new http.Server();

server.listen(1337, '127.0.0.1');

server.on('request', (req, res) => {
    let parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === '/echo' && parsedUrl.query.message){
        res.setHeader('Cache-Control', 'no-cache');
        res.end(parsedUrl.query.message);
    }else{
        res.statusCode = 404;
        res.end('Page not found');
    }
})