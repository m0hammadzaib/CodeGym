const http =require("http");

// server create
const server = http.createServer((req, res) => {
  res.write("Hello World from Node Server");
  res.end();
});

// server listen
server.listen(3000,() => {
console.log("Server running on port 3000");
});

