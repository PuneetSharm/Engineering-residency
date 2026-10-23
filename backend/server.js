
import express from "express";

const app = express();

// 1. Parse incoming JSON request bodies
app.use(express.json());

// 2. Normal middleware
app.use((request, response, next) => {
  console.log(request.method, request.url);
  next();
});

// 3. A normal route
app.get("/", (request, response) => {
  response.send("Welcome to the Home page");
});

// 4. A route that intentionally generates an error
app.get("/error", (request, response, next) => {
  next(new Error("Something went wrong!"));
});

// 5. Error-handling middleware
app.use((error, request, response, next) => {
  console.error(error.message);

  response.status(500).json({
    message: "Internal Server Error"
  });
});

app.listen(5000, () => {
  console.log("Express server running on http://localhost:5000");
});
