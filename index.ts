import express from "express";
import cors from "cors";
import { json } from "express"; // Import the json middleware
import connection from "./config/db";
const app = express();
const port = 3001;

app.use(
  cors({
    allowedHeaders: "content-type, Authorization",
  })
);

app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

connection;
