/* google 소셜 로그인 */
const { google } = require("googleapis");
let googleClient = require("../../config/google.json");

// 사용할 scopes를 입력하고, OAuth2.0에 실질적으로 연결할 정보들을 다시 연결
const googleConfig = {
  clientId: googleClient.web.client_id,
  clientSecret: googleClient.web.client_secret,
  redirect: googleClient.web.redirect_uris[0]
};

// console.log(googleConfig);

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
  scope: scopes
}); // 클라이언트 만들 때 추가

// 그리고 google+ api를 사용하기 위해 google+ api에 대한 정보 입력
function getGooglePlusApi(auth) {
  return google.plus({ version: "v1", auth });
}

// 실질적으로 로그인해서 정보를 불러올 코드 작성
// 간단하게 refresh token, access token, id 를 불러온다
module.exports = async function googleLogin(code) {
  // get("/google/login") 할 때 아래와 같이 redirect
  // res.redirect(url);
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  oauth2Client.on("tokens", token => {
    if (tokens.refresh_token) {
      console.log("리프레시 토큰: ", tokens.refresh_token);
    }
    console.log("액세스 토큰: ", tokens.access_token);
  });
  const plus = getGooglePlusApi(oauth2Client);
  const res = await plus.people.get({ userId: "me" });
  console.log(`Hello ${res.data.displayName}! ${res.data.id}`);
  return res.data.displayName;
};
// module.exports 수정
