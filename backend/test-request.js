
const response = await fetch("http://localhost:5000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: '{"name":"Puneet","age":25,}'
});

console.log("Status:", response.status);
console.log("Response:", await response.json());
