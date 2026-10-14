import { createServer } from "node:http";

const server = createServer((request, response) => {
  const url = new URL(request.url, "http://localhost:5000");

  console.log("Method:", request.method);
  console.log("Path:", url.pathname);
  console.log("Page:", url.searchParams.get("page"));

  if (request.method === "GET" && url.pathname === "/users") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain; charset=utf-8");

    response.end(`Users page. Requested page: ${url.searchParams.get("page") ?? "1"}`);
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    response.end("Route not found");
  }
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});