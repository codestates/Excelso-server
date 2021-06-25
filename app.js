const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
const port = 3000;
require("dotenv").config();

// session-cookie 설정

app.use(
  session({
    secret: process.env.SESSION,
    resave: false,
    proxy: true,
    saveUninitialized: true,
    rolling: true,
    cookie: {
      path: "/",
      sameSite: "none",
      httpOnly: true,
      maxAge: 60000 * 30, // 30minutes
      secure: false, // true => Only Https
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors 설정

app.use(express.json());
const corsOption = {
  origin: "*",
  methods: ["GET", "POST", "OPTIONS", "PATCH"],
  credentials: true,
  maxAge: 86400,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOption));

//router

const userRouter = require("./routers/user");
const reviewRouter = require("./routers/review");

app.use("/user", userRouter);
app.use("/coffee", reviewRouter);
// app.use('/')

const server = app.listen(port, () => {
  console.log(`http server listening on ${port}`);
});
module.exports = server;
