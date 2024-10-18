import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 404;
  res.statusMessage = "yahoo";
  res.writeHead(404, "not found in server", { "Content-Type" : "text/html" } )
  res.write("<h1>Hello JEYAPANDI & FAMILY</h1>");
});
server.listen(8000, () => {
  console.log("server is port on 8000");
});
