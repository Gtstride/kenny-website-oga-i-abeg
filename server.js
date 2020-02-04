
import express from "express";
import bodyParser from "body-parser";

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Good Job",
    message: "This is going to be more awesome than i thought"
  });
});

app.post("/", (req, res, next) => {
  res.status(201).json({
    status: 'Success',
    messsage: "Just trying out this post routes"
  })
})

app.listen(port, () => console.log(`Web App is live on port ${port}`));
function newFunction() {
  return console.log;
}
