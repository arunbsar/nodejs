
function start(response) {
    console.log("Request handler 'start' was called.");
    var os = require("os");
    var body = 'Hello World Version 1, from: ' + os.hostname();

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

exports.start = start;
