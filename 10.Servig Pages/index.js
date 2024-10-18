import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    const data = fs.readFile("./public/index.html", (error, data) => {
      if (error) throw new error();
      res.end(data);
    });
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    const data = fs.readFile("./public/about.html", (error, data) => {
      if (error) throw new error();
      res.end(data);
    });
  } else {
    res.writeHead(404, "BAD REQUEST");
    res.end("<h1>page not found</h1>")
  }
});
server.listen(8000, () => {
  console.log("server is started");
});
