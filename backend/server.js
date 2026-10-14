import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("Request:", request.method, request.url);

  if (request.method === "GET" && request.url === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    response.end("Welcome to the Home page");
  } else if (
    request.method === "GET" &&
    request.url === "/users"
  ) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    response.end("Users page");
  } else if (
    request.method === "GET" &&
    request.url === "/products"
  ) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    response.end("Products page");
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    response.end("Route not found");
  }
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});