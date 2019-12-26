const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 1800;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Good Job",
    message: "This site is live and direct"
  });
});

app.listen(port, () => console.log(`Web App is live on port ${port}`));
function newFunction() {
  return console.log;
}
