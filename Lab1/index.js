const express = require("express");
const app = express();
const port1 = 3000;
const port2 = 3001;
app.get("/port1", (req, res) => {
  res.send("Hello from Port 3000!");
});

app.get("/port2", (req, res) => {
  res.send("Hello from Port 3001!");
});

app.listen(port1, () => {
  console.log(`Server is running on port ${port1}`);
});

app.listen(port2, () => {
  console.log(`Extra server is running on port ${port2}`);
});
