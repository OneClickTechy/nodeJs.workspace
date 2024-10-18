import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "ok", { "Content-Type": "text/html" });
    res.end(`<a href="/about">about</a>`);
  } else if (req.url === "/about") {
    res.writeHead(200, "ok", { "Content-Type": "text/html" });
    res.end("<h2>name: jeyapandi</h2>");
  } else {
    res.writeHead(404, "page not found");
    res.end("<h3>page not found</h3>");
  }
});
server.listen(8000, () => {
  console.log("server is started at port 8000");
});
