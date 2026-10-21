const response = await fetch("http://localhost:5000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "Puneet",
    role: "developer",
  }),
});

console.log("Status:", response.status);
console.log("Response:", await response.text());