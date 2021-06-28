const express = require("express");
const app = express();

const { google } = require("googleapis");
var googleClient = require("./config/google.json");

// 사용할 scopes를 입력하고, OAuth2.0에 실질적으로 연결할 정보들을 다시 연결
const googleConfig = {
  clientId: googleClient.web.client_id,
  clientSecret: googleClient.web.client_secret,
  redirect: googleClient.web.redirect_uris[0],
};

console.log(googleConfig);

const scopes = ["https://www.googleapis.com/auth/plus.me"];

const oauth2Client = new google.auth.OAuth2(
  googleConfig.clientId,
  googleConfig.clientSecret,
  googleConfig.redirect
);

// 로그인 url을 받아오기 위한 정보 입력
// access_type에는 online과 offline이 있는데 offline으로 해야 제일 처음 로그인 했을 때 refresh_token을 받아온다
// scope는 위에 입력한 scopes를 가져온다
const url = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scopes,
});

// 그리고 google+ api를 사용하기 위해 google+ api에 대한 정보 입력
function getGooglePlusApi(auth) {
  return google.plus({ version: "v1", auth });
}

// 실질적으로 로그인해서 정보를 불러올 코드 작성
// 간단하게 refresh token, access token, id 를 불러온다
async function googleLogin(code) {
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  oauth2Client.on("tokens", (token) => {
    if (tokens.refresh_token) {
      console.log("리프레시 토큰: ", tokens.refresh_token);
    }
    console.log("액세스 토큰: ", tokens.access_token);
  });
  const plus = getGooglePlusApi(oauth2Client);
  const res = await plus.people.get({ userId: "me" });
  console.log(`Hello ${res.data.displayName}! ${res.data.id}`);
  return res.data.displayName;
}

// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//   return res.render("index");
// });

// 로그인 할 주소
app.get("/login", function (req, res) {
  res.redirect(url);
});

// 로그인이 되었을 경우 실행될 callback 주소
app.get("/auth/google/callback", async function (req, res) {
  const displayName = await googleLogin(req.query.code);
  console.log(displayName);

  res.redirect("http://localhost:3000");
});

app.get("/", function (req, res) {
  res.send("Hello World!");
  console.log("로그인 해서 홈으로 돌아옴");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000");
});
