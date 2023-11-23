const express = require("express");

const PORT = 8000;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`I am listening: ${PORT}`);
});

app.use((req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.substring(7); // 'Bearer ' is 7 characters
    req.token = token; // You can store the token in the request object for later use
    next(); // Move to the next middleware or route handler
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.get("/api/users", async (req, res) => {
  res.json({ users: { name: "John" } });
});

app.get("/api/employees", async (req, res) => {
  res.json({ users: { name: "John" } });
});
