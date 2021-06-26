const express = require("express");
const cors = require("cors");
require('./models')
const app = express();
const port = 3000;

app.use(express.json());
const corsOption = {
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS', 'PATCH'],
  credentials: true,
  maxAge: 86400,
  optionsSuccessStatus: 204
}
app.use(cors(corsOption));

//router

const userRouter = require('./routers/user');
const coffeeRouter = require('./routers/coffee');
app.use('/user', userRouter);
app.use('/coffee', coffeeRouter);

const server = app.listen(port, () => {
  console.log(`http server listening on ${port}`);
});
module.exports = server;