const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const port = 8000;
require("dotenv").config();

// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//   return res.render("index");
// });
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
app.use(cookieParser());
// cors 설정
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
const coffeeRouter = require("./routers/coffee");
const reviewRouter = require("./routers/review");
const bookmarkRouter = require("./routers/bookmark");

app.use("/user", userRouter);
app.use("/coffee", coffeeRouter);
app.use("/review", reviewRouter);
app.use("/bookmark", bookmarkRouter);
// app.use('/')

const server = app.listen(port, () => {
  console.log(`http server listening on ${port}`);
});
module.exports = server;
