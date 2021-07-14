const fs = require("fs");
const { Coffee } = require("../../models");
const path = require("path");
// const mPath = path.join(__dirname, "../../coffeeimg/starbucks");
console.log(__dirname);

module.exports = async (req, res) => {
  const coffeeInfo = await Coffee.findAll({ raw: true });
  if (coffeeInfo) {
    const R = coffeeInfo.filter((c) => c.id === 88)[0];
    console.log(typeof R.src);
    fs.readFile(
      __dirname + "/나이트콜드부르.png",
      "utf-8",
      function (err, data) {
        // console.log("error:", err);
        console.log("data:", data);
        // const result = coffeeInfo.forEach((c) => {
        //   if (c.id === 70) {
        //     c.src = data;
        //   }
        // });
        // console.log(coffeeInfo);
      }
    );
    return res.status(200).json(coffeeInfo);
  }
  res.status(404).json({
    data: null,
    message: "정보를 불러올 수 없습니다.",
  });
};
