const { datas } = require("./seedData/coffee");

const res = datas.coffeeBeans.map((obj) => {
  obj["createdAt"] = new Date()
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  obj["updatedAt"] = new Date()
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  obj["brand_id"] = 5;
});
console.log(datas.coffeeBeans);
// const { banner } = require("./banner");

// console.log(banner);
