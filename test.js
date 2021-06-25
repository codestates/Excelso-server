const { datas } = require("./coffee");

const res = datas.coffeeBeans.map((obj) => {
  obj["createdAt"] = new Date()
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  obj["updatedAt"] = new Date()
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
});
console.log(datas.coffeeBeans);
// const { banner } = require("./banner");

// console.log(banner);
