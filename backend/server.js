
import express from "express";

const app = express();

app.use(express.json());

app.post("/users", (request, response) => {
  response.json({
    message: "User created",
    user: request.body
  });
});

app.use((error, request, response, next) => {
  console.error(error.message);

  response.status(400).json({
    message: "Invalid JSON in request body"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
