import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import users from "./routes/api/users";
import profile from "./routes/api/profile";
import posts from "./routes/api/posts";

const app = express();

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log(err));
// const express = require('express')
// const bodyParser = require('body-parser')

// Database Configuration

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use Routes
app.use("/api/v1/users", users);
app.use("/api/v1/profile", profile);
app.use("/api/v1/posts", posts);

const port = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Good Job",
    message: "This is going to be more awesome than i thought"
  });
});

// app.post("/", (req, res) => {
//   res.status(201).json({
//     status: "Success",
//     messsage: "Just trying out this post routes"
//   });
// });

app.listen(port, () => console.log(`Web App is live on port ${port}`));
function newFunction() {
  return console.log;
}
