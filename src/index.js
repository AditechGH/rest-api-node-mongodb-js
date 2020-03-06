/* eslint-disable no-console */

import express from "express";
import constants from "./config/constants";
import "./config/database";
import middlewareConfig from "./config/middleware";
import apiRoutes from "./modules";

const app = express();
middlewareConfig(app);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/reset-password", (req, res) => {
  res.send(`token: ${req.query.token}`);
});

app.get("/email-verification", (req, res) => {
  res.send(`token: ${req.query.token}, email: ${req.query.email}`);
})

app.post('/email-notifications',  (req, res) => {
	console.log(req.headers);
    res.status(200).json();
});

apiRoutes(app);

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`Server running on port: ${constants.PORT} - Running on ${process.env.NODE_ENV}`);
  }
});
