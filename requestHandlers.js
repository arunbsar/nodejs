
function start(response) {
    console.log("Request handler 'start' was called.");

    var body = 'Hello World Version 4' + \
    ' ';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

exports.start = start;
