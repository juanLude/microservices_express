const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");
const app = express();

// parse incoming requests with JSON payloads and make them available as req.body
app.use(bodyParser.json());

// server to listen on port 4000
const port = 4000;

const posts = {};

app.use(cors());

app.get("/posts", async (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  console.log(req.body.title);
  const { title } = req.body;
  posts[id] = { id, title };
  // new resource has been successfully created on the server
  res.status(201).send(posts[id]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
