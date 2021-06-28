const express = require("express");
const cors = require("cors");
require("./models");
const app = express();
const port = 3000;
require("dotenv").config();

// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//   return res.render("index");
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors 설정

const corsOption = {
  origin: "*",
  methods: ["GET", "POST", "OPTIONS", "PATCH"],
  credentials: true,
  maxAge: 86400,
  optionsSuccessStatus: 204
};
app.use(cors(corsOption));

//router

const userRouter = require("./routers/user");
const coffeeRouter = require("./routers/coffee");
const reviewRouter = require("./routers/review");

app.use("/user", userRouter);
app.use("/coffee", coffeeRouter);
app.use("/review", reviewRouter);
// app.use('/')

const server = app.listen(port, () => {
  console.log(`http server listening on ${port}`);
});
module.exports = server;
