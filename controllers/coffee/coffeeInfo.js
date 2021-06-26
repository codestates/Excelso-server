const { Coffee } = require("../../models");

module.exports = async (req, res) => {
  const coffeeInfo = await Coffee.findAll();
  
  if(coffeeInfo) {
    return res.status(200).json(coffeeInfo)
  }
  res.status(404).json({
    data: null, 
    message: "정보를 불러올 수 없습니다.",
 })
}