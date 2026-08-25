import http from "http";

const server = http.createServer((req, res) => {
    console.log("Welcome to Node js.")
    console.log(req.url);
    console.log("request.method");

    console.log(req.method);

    console.log("Request Headers");
    console.log(req.headers);
    console.log("Socket Info");
    //console.log(req.socket);
    console.log(req.headers.host);
    
    res.end("hello")
})

const PORT = 4444;

server.listen(PORT, () => console.log("Sever is running..."));
