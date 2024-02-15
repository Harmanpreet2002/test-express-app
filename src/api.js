const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

const PORT = 9000;

router.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
