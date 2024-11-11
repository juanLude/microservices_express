const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(bodyParser.json());
const port = 4000;

const posts = {};

app.use(cors());

app.get("/posts", async (req, res) => {
  res.send(posts);
});
app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  console.log(req);
  const { title } = req.body;
  posts[id] = { id, title };
  res.status(201).send(posts[id]);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
