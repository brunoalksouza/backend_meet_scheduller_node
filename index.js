const app = require("./app");
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hell World!");
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
