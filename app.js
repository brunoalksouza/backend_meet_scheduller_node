const express = require("express");
const body_parser = require("body-parser");
const userRouter = require("./routers/user.router");
const eventRouter = require("./routers/event.router");
const cors = require("cors");

const app = express();

app.use(body_parser.json());
// Middleware que carrega as permissões do CORS
// Access-Control-Allow-Origin: *
app.use(cors({ origin: "*" }));

app.use("/", userRouter);
app.use("/", eventRouter);

module.exports = app;
