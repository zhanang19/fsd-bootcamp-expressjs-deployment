const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("ExpressJS on Vercel"));

app.get("/test", (req, res) => res.send("Testing ExpressJS on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
