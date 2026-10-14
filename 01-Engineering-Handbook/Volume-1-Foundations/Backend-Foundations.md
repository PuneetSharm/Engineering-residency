# Backend Foundations — Node.js and HTTP

> **Purpose:** A long-term engineering reference for understanding backend fundamentals, important execution flows, technical distinctions, and limitations.

## 1. Node.js Foundations

### 1.1 What is Node.js?

**Definition:** Node.js is a JavaScript runtime that allows JavaScript to execute outside the browser.

Node.js uses the V8 JavaScript engine and provides additional APIs for networking, filesystem access, and other server-side operations.

**Browser vs. Node.js**

```text
Browser environment             Node.js environment
-------------------             ------------------
JavaScript engine               JavaScript engine
DOM APIs                         Filesystem APIs
window / document                process
Browser Web APIs                 Networking APIs
         |                               |
         v                               v
  Frontend execution              Backend execution
```

**Why does Node.js exist?**

It allows JavaScript to execute server-side operations, including receiving HTTP requests, accessing files, and communicating with databases.

**Important distinctions**

- Node.js is a runtime, not a framework.
- Express is a framework that runs on Node.js.
- React is a UI library commonly used in the browser.
- Node.js can create an HTTP server without Express.

### 1.2 ES Modules vs. CommonJS

JavaScript modules allow code to be separated into files and imported or exported between them.

| ES Modules (ESM) | CommonJS (CJS) |
|---|---|
| `import` | `require()` |
| `export` | `module.exports` |
| Standard JavaScript module system | Traditional Node.js module system |

Our project uses ES Modules because we want to use the `import` and `export` syntax familiar from React.

In `package.json`:

```json
{
  "type": "module"
}
```

This configures Node.js to interpret ordinary `.js` files in this package as ES Modules.

Example:

```js
import { createServer } from "node:http";
```

The CommonJS equivalent is:

```js
const { createServer } = require("node:http");
```

**Important:** ES Modules are not automatically better in every situation. We chose them for consistency with our existing JavaScript experience. Understanding CommonJS remains useful when working with older projects and tooling.

### 1.3 Process, server, port, and connection

These are related but different concepts.

- **Process:** A running instance of a program managed by the operating system.
- **Server:** Software that listens for requests and handles them.
- **Port:** A logical network endpoint used to direct traffic to a listening service.
- **Connection:** A communication relationship between network endpoints.

When we run:

```bash
node server.js
```

the operating system starts a Node.js process.

Example:

```text
Your computer
    |
    |-- Port 3000 -> Frontend development server
    |-- Port 5000 -> Node.js backend
    |-- Port 5432 -> PostgreSQL, if running locally
```

When we open:

```text
http://localhost:5000
```

- `localhost` refers to the local machine.
- `5000` identifies the port.

**Important distinctions**

- A port is not a server.
- A port is not itself a connection.
- A process is not the same thing as a server object.
- A server can stop listening or crash even though its source files still exist.

---

## 2. HTTP Server Lifecycle

### 2.1 Creating an HTTP server

Our first server uses Node.js's built-in HTTP module.

```js
import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.end("Hello from Node.js");
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
```

#### What is `node:http`?

`node:http` is a built-in Node.js module for working with HTTP. It does not need to be installed using npm.

#### What is `createServer()`?

`createServer()` is a function provided by the `node:http` module. It creates and returns an HTTP server object.

```js
const server = createServer((request, response) => {
  // Request-handling logic
});
```

The callback is a function that we supply to Node.js. Node invokes it when an HTTP request arrives.

#### What is `server.listen()`?

```js
server.listen(5000);
```

This starts listening on port `5000`.

**Important distinction:**

```text
createServer(callback)
        |
        v
Creates server object
        |
        v
server.listen(5000)
        |
        v
Starts listening on port 5000
```

Creating the server object and starting it to listen are separate operations.

### 2.2 What happens when we start the server?

When we execute:

```bash
node server.js
```

the approximate flow is:

```text
Execute node server.js
        |
        v
Node.js process starts
        |
        v
JavaScript code executes
        |
        v
createServer() creates HTTP server
        |
        v
server.listen(5000)
        |
        v
Operating system binds/listens on port
        |
        v
Server waits for incoming requests
```

The operating system handles network delivery, while Node.js handles HTTP processing and invokes our callback.

The terminal message:

```text
Server running on http://localhost:5000
```

comes from our own `console.log()`. Node.js does not print that exact message automatically.

### 2.3 Complete request-response flow

When we open `http://localhost:5000/`:

```text
Browser
   |
   | HTTP request
   v
Operating system networking
   |
   v
Node HTTP server
   |
   v
Request handler callback
   |
   v
Application logic
   |
   v
HTTP response
   |
   v
Browser
```

The server waits for incoming requests; it does not continuously send data to the browser.

### 2.4 Request and response objects

The callback receives two arguments:

```js
(request, response) => {
  // Handle the incoming request
  // Construct and send the response
}
```

- **`request`:** Information about the incoming request.
- **`response`:** An interface for constructing and sending the outgoing HTTP response.

Mental model:

```text
request
   |
   v
What the client asks the server to do

response
   |
   v
What the server sends back
```

### 2.5 What does `response.end()` do?

Example:

```js
response.end("Hello from Node.js");
```

It sends the supplied data as the final response body data and signals that the response is complete.

```text
Node.js
   |
   | response.end("Hello from Node.js")
   v
HTTP response body
   |
   v
Browser
   |
   v
Hello from Node.js
```

**Why didn't we need to write HTML?**

The response body can contain plain text. A browser can display plain-text content without receiving an HTML document.

To send HTML:

```js
response.setHeader(
  "Content-Type",
  "text/html; charset=utf-8"
);

response.end("<h1>Hello from Node.js</h1>");
```

The browser interprets the markup as HTML because of the response's content type.

**Important distinctions**

- `console.log()` writes to the Node.js process's output, normally the terminal.
- `response.end()` sends response data to the HTTP client and completes the response.
- `return "Hello"` returns a value to the calling function; it does not automatically send an HTTP response.

---

## 3. HTTP Response: Status, Headers, and Body

An HTTP response has three important parts.

```text
HTTP response
    |
    |-- Status code
    |
    |-- Headers
    |
    |-- Body
```

### 3.1 Status codes

A status code describes the outcome of the request.

| Status | Meaning |
|---|---|
| `200 OK` | Request succeeded |
| `400 Bad Request` | Request is invalid or cannot be processed as sent |
| `401 Unauthorized` | Authentication is required or invalid |
| `403 Forbidden` | Client is not permitted to perform the operation |
| `404 Not Found` | Requested resource or route was not found |
| `500 Internal Server Error` | Unexpected server error |

### 3.2 Headers

Headers provide metadata about the response.

Example:

```http
Content-Type: text/plain; charset=utf-8
```

Common content types:

- `text/plain`: Plain text.
- `text/html`: HTML.
- `application/json`: JSON.

### 3.3 Body

The body contains the actual response data.

Example:

```js
response.statusCode = 200;

response.setHeader(
  "Content-Type",
  "text/plain; charset=utf-8"
);

response.end("Hello from Node.js");
```

Here:

- `response.statusCode` sets the status.
- `response.setHeader()` sets a response header.
- `response.end()` sends the body and completes the response.

### 3.4 How to inspect a response

Use Chrome DevTools:

1. Open DevTools using `F12`.
2. Select **Network**.
3. Refresh the browser.
4. Select the `/` request.
5. Open **Headers**.
6. Find **General → Status Code**.
7. Inspect `Content-Type` under **Response Headers**.

For example:

```js
response.statusCode = 404;
response.end("User not found");
```

The browser may display `User not found`, while DevTools shows `404 Not Found`.

**Important principle:** The response message and status code are independent. Text that sounds successful does not guarantee a successful status, and text that sounds like an error does not automatically produce an error status.

---

## 4. Development Workflow and Browser Behavior

### 4.1 Editing a file does not restart Node.js

Suppose the running server contains:

```js
response.end("Hello from Node.js");
```

We edit the file to contain:

```js
response.end("Hello from Express");
```

If the server was started with:

```bash
node server.js
```

the existing Node.js process normally continues executing the already-loaded code.

```text
server.js on disk
       |
       | Node starts
       v
Running Node process
       |
       v
Executes loaded code

Editing the file != restarting the process
```

Without a file-watching tool, stop the process with `Ctrl + C` and start it again.

### 4.2 Nodemon

Nodemon is a development tool that watches configured files and restarts the Node.js process when it detects relevant changes.

Install it:

```bash
npm install --save-dev nodemon
```

Configure `package.json`:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

Keep all other existing `package.json` fields.

Run:

```bash
npm run dev
```

Flow:

```text
Save file
    |
    v
Nodemon detects change
    |
    v
Node process restarts
    |
    v
Updated code loads
    |
    v
Server starts listening again
```

**Limitations and distinctions**

- Nodemon does not keep an HTTP connection alive.
- Nodemon does not make the server immune to crashes.
- Nodemon is primarily a development convenience.
- Restarting the server can interrupt active requests and connections.
- Production systems require an appropriate deployment and process-supervision strategy.

### 4.3 Multiple requests per browser refresh

During our experiment, the terminal displayed:

```text
Request received: GET /
Request received: GET /favicon.ico
```

The browser requested the root URL and also requested a favicon.

```text
Browser refresh
       |
       |-- GET /
       |      |
       |      v
       |   Handler executes
       |
       |-- GET /favicon.ico
              |
              v
           Handler executes
```

The favicon is commonly used as the small icon in the browser tab.

Our handler runs for each incoming request, so both requests produce a log.

#### React Strict Mode vs. multiple HTTP requests

| React Strict Mode | Multiple HTTP requests |
|---|---|
| React development checks can intentionally re-run certain operations. | The client makes separate HTTP requests. |
| Related to React rendering and Effect behavior. | Related to HTTP networking and server request handling. |
| Does not explain our two Node log entries. | Explains `GET /` and `GET /favicon.ico`. |

**Engineering rule:** When something happens twice, investigate whether one operation ran twice or two separate operations occurred.

---

## 5. Routing

### 5.1 What is routing?

Routing is the process of deciding how to handle an incoming request based on its HTTP method, URL path, and sometimes other request information.

Example:

```text
GET /
    -> Home response

GET /users
    -> Users response

GET /products
    -> Products response

GET /unknown
    -> 404 Not Found
```

Node's built-in HTTP module does not automatically create these application routes. We implement the routing logic ourselves.

### 5.2 Manual routing using Node.js

```js
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
```

This is a learning example. It assumes that `createServer` has been imported and the server is started separately.

### 5.3 How does route matching work?

Consider:

```js
request.method === "GET" && request.url === "/users"
```

Both conditions must be true:

1. The request method must be `GET`.
2. The URL must exactly equal `/users`.

The `&&` operator means both conditions must evaluate to `true`.

If the conditions match, the server sends `"Users page"`. If no condition matches, the final `else` returns a `404` response.

### 5.4 Query-string limitation

Consider:

```text
http://localhost:5000/users?page=2
```

The request URL is:

```js
request.url // "/users?page=2"
```

Therefore:

```js
request.url === "/users"
```

evaluates to `false`.

The query string is included in `request.url`. Later, we will learn to parse the URL and distinguish its pathname from query parameters.

### 5.5 Why use Express?

Manual routing is useful for understanding the fundamentals, but it becomes cumbersome as an application grows.

Applications may need:

- Route matching and parameters.
- Request validation.
- Authentication and authorization.
- Reusable middleware.
- Centralized error handling.
- Database access.
- Consistent response handling.

Express provides higher-level abstractions for routing and middleware. It does not automatically solve every security, validation, or architectural problem; those still require engineering decisions.

**Technology decision:** Learn the built-in HTTP fundamentals first, then introduce Express when its abstractions provide a practical benefit.

---

## 6. Important Distinctions — Quick Lookup

| Do not confuse | With |
|---|---|
| Node.js | Express |
| Runtime | Framework |
| Process | Server object |
| Server | Port |
| Port | Connection |
| `createServer()` | `server.listen()` |
| Request | Response |
| Response headers | Response body |
| Status code | Response message |
| `console.log()` | `response.end()` |
| Browser rendering | Server-side response generation |
| File saved on disk | Code loaded by the running process |
| Nodemon | Production process supervisor |
| One browser refresh | Exactly one HTTP request |
| React Strict Mode | Multiple network requests |
| URL path | Complete URL or path plus query string |
| Routing | Business logic |
| `404 Not Found` | Server offline |

---

## 7. Important Flows — Quick Reference

### Flow A: Starting a Node.js server

```text
node server.js
      |
      v
Node process starts
      |
      v
createServer(callback)
      |
      v
server.listen(5000)
      |
      v
OS binds/listens on port
      |
      v
Server waits for requests
```

### Flow B: Handling an HTTP request

```text
Client sends request
      |
      v
Node HTTP server receives request
      |
      v
Handler callback executes
      |
      v
Application logic runs
      |
      v
Response status + headers + body
      |
      v
response.end()
      |
      v
Client receives completed response
```

### Flow C: Development reload

```text
Save file
      |
      v
Nodemon detects change
      |
      v
Node process restarts
      |
      v
Updated code loads
      |
      v
Server starts listening again
```

### Flow D: Routing

```text
Incoming request
      |
      v
Inspect method + URL
      |
      v
Match route
      |
      v
Execute corresponding logic
      |
      v
Send appropriate response
```

---

## 8. How to Use These Notes

When revisiting a concept, ask:

1. What initiates this operation?
2. Which component is responsible?
3. What information flows between components?
4. What happens if the operation fails?
5. What does the technology handle automatically?
6. What must I implement myself?
7. What are its limitations and alternatives?

The goal is to reconstruct the underlying system, not merely memorize definitions or code.

**Current learning checkpoint:** Node.js runtime, ES Modules, processes, ports, HTTP server creation, request-response handling, status codes, headers, Nodemon, and basic routing.

**Next:** Verify routing understanding, then study Express—what it adds over Node's HTTP module, how Express routing works, and where middleware fits into the request-response lifecycle.