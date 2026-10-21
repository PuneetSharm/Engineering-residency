
import express from "express";

const app = express();

app.use(express.json());

// app.use(( request, response, next) =>{
//   console.log("Middleware executed");
//   next();
// });

app.get("/", (request, response) => {
  response.send("Welcome to the Home page");
});

app.get("/users", (request, response) => {
  response.send("Users page");
});

app.post("/users", (request, response) => {
  console.log(request.body);
  response.send("User data received");
})

app.listen(5000, () => {
  console.log("Express server running on http://localhost:5000");
});
