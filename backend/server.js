
import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Welcome to the Home page");
});

app.get("/users", (request, response) => {
  response.send("Users page");
});

app.listen(5000, () => {
  console.log("Express server running on http://localhost:5000");
});
