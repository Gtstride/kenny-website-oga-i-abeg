import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import users from "./backend/routes/api/users";
import profile from "./backend/routes/api/profile";
import posts from "./backend/routes/api/posts";

const app = express();


// Database Configuration
const db = require("./backend/config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => {
    console.log('Unable to connect to Database!');
    console.log(err);
  })

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

app.listen(port, () => console.log(`Server is live and runs on port https://localhost:${port}`));
